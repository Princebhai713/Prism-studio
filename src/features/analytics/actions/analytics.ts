'use server';

import { query } from '@/lib/db';
import { encrypt } from '@/lib/encryption';

/**
 * Server Actions for advanced analytics tracking.
 */

export async function trackVisitor(data: any) {
  const { visitorId, fingerprint, details, referrerId } = data;
  try {
    // Check if IP is blocked
    const ip = details.ip || 'unknown';
    const isBlocked = await query('SELECT id FROM blocked_ips WHERE ip_address = $1', [ip]);
    if (isBlocked.rows.length > 0) return { success: false, error: 'Entity Blocked' };

    let identityRes = await query(
      'SELECT global_user_id, visit_count FROM identities WHERE fingerprint = $1',
      [fingerprint]
    );
    
    let globalUserId: string;
    if (identityRes.rows.length === 0) {
      const newIdentity = await query(
        'INSERT INTO identities (fingerprint, referrer_id, visit_count) VALUES ($1, $2, 1) RETURNING global_user_id',
        [fingerprint, referrerId]
      );
      globalUserId = newIdentity.rows[0].global_user_id;
    } else {
      globalUserId = identityRes.rows[0].global_user_id;
      // Increment visit count for repetitive tracking
      await query('UPDATE identities SET visit_count = visit_count + 1 WHERE global_user_id = $1', [globalUserId]);
    }

    await query(
      `INSERT INTO visitors (visitor_id, global_user_id, device_info, browser_info, city, country)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (visitor_id) DO UPDATE SET global_user_id = EXCLUDED.global_user_id`,
      [visitorId, globalUserId, JSON.stringify(details.device), JSON.stringify(details.browser), details.geo.city, details.geo.country]
    );
    return { success: true, globalUserId };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function trackSession(data: any) {
  const { sessionId, visitorId, info } = data;
  try {
    await query(
      `INSERT INTO sessions (session_id, visitor_id, landing_page, referrer, utm_source, utm_medium, utm_campaign, gclid, fbclid)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [sessionId, visitorId, info.landingPage, info.referrer, info.utm?.source, info.utm?.medium, info.utm?.campaign, info.clickIds?.gclid, info.clickIds?.fbclid]
    );
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

export async function trackPageView(data: any) {
  const { sessionId, path, title, metrics, metadata } = data;
  try {
    await query(
      `INSERT INTO page_views (session_id, path, title, load_time, scroll_depth, time_spent, metadata)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [sessionId, path, title, metrics.loadTime, metrics.scrollDepth, metrics.timeSpent, JSON.stringify(metadata)]
    );
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

export async function trackEvent(data: any) {
  const { sessionId, type, label, path, metadata } = data;
  try {
    await query(
      `INSERT INTO events (session_id, event_type, label, path, metadata) VALUES ($1, $2, $3, $4, $5)`,
      [sessionId, type, label, path, JSON.stringify(metadata)]
    );
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

export async function trackCTA(data: any) {
  const { sessionId, ctaName, page, targetUrl, elementId } = data;
  try {
    await query(
      `INSERT INTO cta_events (session_id, cta_name, page, target_url, element_id) VALUES ($1, $2, $3, $4, $5)`,
      [sessionId, ctaName, page, targetUrl, elementId]
    );
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

export async function trackFormEvent(data: any) {
  const { sessionId, formType, eventType } = data;
  try {
    await query(
      `INSERT INTO form_events (session_id, form_type, event_type) VALUES ($1, $2, $3)`,
      [sessionId, formType, eventType]
    );
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

export async function startFormSession(sessionId: string, formType: string, triggeredByCta?: string) {
  try {
    const res = await query(
      `INSERT INTO form_sessions (session_id, form_type, triggered_by_cta) VALUES ($1, $2, $3) RETURNING id`,
      [sessionId, formType, triggeredByCta]
    );
    return { success: true, formSessionId: res.rows[0].id };
  } catch (e) {
    return { success: false };
  }
}

export async function updateFormProgress(data: any) {
  const { formSessionId, progress, partialEmail, partialPhone, lastField, totalTime } = data;
  try {
    const encryptedEmail = partialEmail ? encrypt(partialEmail) : null;
    const encryptedPhone = partialPhone ? encrypt(partialPhone) : null;

    await query(
      `UPDATE form_sessions SET 
        progress_percentage = $1, 
        partial_email_encrypted = COALESCE($2, partial_email_encrypted),
        partial_phone_encrypted = COALESCE($3, partial_phone_encrypted),
        drop_field = $4,
        total_time = $5,
        last_activity = CURRENT_TIMESTAMP
       WHERE id = $6`,
      [progress, encryptedEmail, encryptedPhone, lastField, totalTime, formSessionId]
    );
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}

export async function logFieldInteraction(data: any) {
  const { formSessionId, fieldName, fieldType, isFilled, editCount, timeSpent } = data;
  try {
    await query(
      `INSERT INTO form_field_events (form_session_id, field_name, field_type, is_filled, edit_count, time_spent)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [formSessionId, fieldName, fieldType, isFilled, editCount, timeSpent]
    );
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}

export async function logFormError(formSessionId: number, fieldName: string, errorType: string) {
  try {
    await query(
      `INSERT INTO form_errors (form_session_id, field_name, error_type) VALUES ($1, $2, $3)`,
      [formSessionId, fieldName, errorType]
    );
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}

export async function markFormCompleted(formSessionId: number) {
  try {
    await query(
      `UPDATE form_sessions SET is_submitted = true, progress_percentage = 100 WHERE id = $1`,
      [formSessionId]
    );
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}

export async function getAnalyticsStats() {
  try {
    const totalVisitors = await query('SELECT COUNT(DISTINCT global_user_id) as count FROM visitors');
    const totalLeads = await query('SELECT COUNT(*) FROM analytics_leads');
    const sessions = await query('SELECT COUNT(*) FROM sessions');
    const recurringUsers = await query('SELECT COUNT(*) FROM identities WHERE visit_count > 1');
    
    // Optimized query to get unique leads with their latest form progress
    const recentLeads = await query(`
      SELECT l.*, 
        (SELECT progress_percentage FROM form_sessions fs 
         WHERE fs.session_id = l.session_id 
         ORDER BY fs.last_activity DESC LIMIT 1) as progress_percentage
      FROM analytics_leads l
      ORDER BY l.created_at DESC LIMIT 5
    `);

    return {
      stats: {
        visitors: parseInt(totalVisitors.rows[0].count) || 0,
        leads: parseInt(totalLeads.rows[0].count) || 0,
        sessions: parseInt(sessions.rows[0].count) || 0,
        recurring: parseInt(recurringUsers.rows[0].count) || 0,
        conversionRate: ((parseInt(totalLeads.rows[0].count) / (parseInt(totalVisitors.rows[0].count) || 1)) * 100).toFixed(1)
      },
      recentLeads: recentLeads.rows
    };
  } catch (error) {
    console.error("Analytics Stats Error:", error);
    return null;
  }
}