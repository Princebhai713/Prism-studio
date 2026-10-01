/**
 * Sends a transactional email using Brevo's REST API.
 * This approach is more reliable in serverless environments than the SDK.
 */
export async function sendEmail({ to, subject, htmlContent }: { to: string | string[]; subject: string; htmlContent: string }) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'noreply@mintx.online';
  const senderName = process.env.BREVO_SENDER_NAME || 'Prism Studio';

  if (!apiKey) {
    console.warn('[Brevo Lib] WARNING: BREVO_API_KEY is missing. Skipping email dispatch.');
    return { skipped: true, reason: 'API key missing' };
  }

  try {
    // Parse recipients (handles string, comma-separated string, or array)
    let recipients: { email: string }[] = [];
    if (Array.isArray(to)) {
      recipients = to.map(e => ({ email: e.trim() })).filter(e => e.email.length > 0);
    } else if (typeof to === 'string') {
      recipients = to.split(',').map(e => ({ email: e.trim() })).filter(e => e.email.length > 0);
    }

    if (recipients.length === 0) {
      console.warn('[Brevo Lib] No valid recipient email provided.');
      return { skipped: true, reason: 'No valid recipient' };
    }

    const payload = {
      sender: { name: senderName, email: senderEmail },
      to: recipients,
      subject: subject,
      htmlContent: htmlContent,
    };

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('[Brevo Lib] API ERROR:', data.message || response.statusText);
      throw new Error(data.message || `Brevo API error: ${response.status}`);
    }

    console.log('[Brevo Lib] Email dispatched successfully to:', recipients.map(r => r.email).join(', '));
    return data;
  } catch (error: any) {
    console.error('[Brevo Lib] FATAL EXCEPTION:', error.message);
    throw error;
  }
}
