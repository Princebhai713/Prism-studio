/**
 * Utility to send SMS using Fast2SMS API.
 */
export async function sendSms({ message, numbers }: { message: string; numbers: string }) {
  const apiKey = process.env.FAST2SMS_API_KEY;

  console.log('[Fast2SMS Lib] --- STARTING SMS DISPATCH ---');
  console.log('[Fast2SMS Lib] Target Number:', numbers);
  console.log('[Fast2SMS Lib] API Key Status:', apiKey ? 'FOUND' : 'MISSING');

  if (!apiKey) {
    throw new Error('FAST2SMS_API_KEY is missing from environment variables');
  }

  try {
    // Using the Fast2SMS 'otp' route for better delivery
    // Note: Fast2SMS requires the 'numbers' to be comma-separated strings
    const payload = {
      route: 'otp',
      variables_values: message, // For OTP route, this is the code itself
      numbers: numbers,
    };

    const response = await fetch('https://www.fast2sms.com/dev/bulkV2', {
      method: 'POST',
      headers: {
        'authorization': apiKey,
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log('[Fast2SMS Lib] API RESPONSE STATUS:', response.status);
    console.log('[Fast2SMS Lib] API RESPONSE BODY:', JSON.stringify(data));

    if (!response.ok || !data.return) {
      throw new Error(data.message || 'Fast2SMS API returned an error');
    }

    return data;
  } catch (error: any) {
    console.error('[Fast2SMS Lib] FATAL ERROR:', error.message);
    throw error;
  }
}
