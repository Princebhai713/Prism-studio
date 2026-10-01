'use server';

import { sendEmail } from '@/lib/brevo';
import { query } from '@/lib/db';
import { incrementPromoUsage } from '@/features/marketing/actions/promo';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'business@mintx.online';

/**
 * Lead Submission with Advanced CRM Intelligence & Attribution.
 */
export async function submitContactForm(formData: any, formType: string) {
  const sessionId = formData.sessionId || null;
  const visitorId = formData.visitorId || null;
  const fingerprint = formData.fingerprint || null;
  const sessionStart = formData.sessionStart || Date.now();
  const referrerId = formData.referrerId || null;
  const promoCode = formData.applied_promo_code || null;
  
  try {
    // 1. IDENTITY STITCHING
    if (fingerprint && formData.email) {
      await query(
        `INSERT INTO identities (fingerprint, email, phone, referrer_id, is_returning)
         VALUES ($1, $2, $3, $4, TRUE)
         ON CONFLICT (fingerprint) 
         DO UPDATE SET 
          email = COALESCE(EXCLUDED.email, identities.email),
          phone = COALESCE(EXCLUDED.phone, identities.phone),
          is_returning = TRUE`,
        [fingerprint, formData.email, formData.phone, referrerId]
      ).catch(e => console.warn("Identity Stitching non-fatal error"));
    }

    // 2. LEAD MAPPING
    const startTime = typeof sessionStart === 'number' ? sessionStart : parseInt(sessionStart.toString()) || Date.now();
    const goalTime = Math.max(0, Math.round((Date.now() - startTime) / 1000));
    
    const leadRes = await query(
      `INSERT INTO analytics_leads (
        session_id, visitor_id, full_name, email, phone, form_type, 
        project_type, budget_range, goal_completion_time, raw_data, status,
        applied_promo_code
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id`,
      [
        sessionId, visitorId, formData.fullName, formData.email, formData.phone, 
        formType, formData.projectType, formData.budgetRange, goalTime, 
        JSON.stringify(formData), 'new', promoCode
      ]
    );

    const leadId = leadRes.rows[0]?.id;

    // 3. PROMO USAGE
    if (promoCode) {
      await incrementPromoUsage(promoCode);
    }

    // 4. INTERNAL NOTIFICATION (Decoupled to CRM)
    // The admin CRM will poll the database for new leads.

    // 5. EMAILS (Background)
    const adminMailContent = `
      <div style="font-family: sans-serif; padding: 30px; background: #f9f9f9; border-radius: 20px;">
        <h2 style="color: #7B66FF;">🔥 New Prism Lead Captured</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Type:</strong> ${formType}</p>
        <hr />
        <p>This lead is also saved in your Admin Command Center.</p>
      </div>
    `;

    let dynamicMessage = "We have received your message and our team at Prism Web Studio will get back to you shortly.";
    if (formType === 'project') {
      dynamicMessage = "We're excited to hear about your new project! Our technical team will review your requirements and reach out within 24 hours to discuss the timeline and next steps.";
    } else if (formType === 'consultation') {
      dynamicMessage = "Thanks for requesting a free consultation! We will contact you shortly to schedule a time that works best for you to discuss your digital strategy.";
    } else if (formType === 'call') {
      dynamicMessage = "We have received your request for a Discovery Call. Keep an eye on your inbox—we'll be in touch soon to lock in a time.";
    } else if (formType === 'service') {
      dynamicMessage = "Thank you for your interest in our specialized services. Our team is reviewing your request and will get back to you with exact details.";
    } else if (formType === 'question') {
      dynamicMessage = "We have received your custom question. Our experts are looking into it and will get back to you with an answer as soon as possible!";
    }

    const userMailContent = `
      <div style="font-family: sans-serif; padding: 30px; background: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0f172a;">Thank you for reaching out!</h2>
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">
          Hi ${formData.fullName},
        </p>
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">
          ${dynamicMessage}
        </p>
        <br/>
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">
          Best Regards,<br/>
          <strong>The Prism Studio Team</strong>
        </p>
      </div>
    `;

    await Promise.allSettled([
      sendEmail({ to: ADMIN_EMAIL, subject: `🔥 Lead: ${formData.fullName}`, htmlContent: adminMailContent }),
      sendEmail({ to: formData.email, subject: `Thank you for contacting Prism Studio`, htmlContent: userMailContent })
    ]);

    return { success: true, leadId };
  } catch (error: any) {
    return { success: false, error: "Submission failed. Please try again." };
  }
}
