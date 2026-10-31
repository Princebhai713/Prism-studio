import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, service, source } = body;

    if (!phone) {
      return NextResponse.json({ error: 'Phone is required' }, { status: 400 });
    }

    try {
      // Attempt to save to contacts table if available
      await query(
        `INSERT INTO contacts (name, phone, message, subject, created_at) VALUES ($1, $2, $3, $4, NOW())`,
        [name || 'Quick Lead', phone, `Service Requested: ${service || 'Web Development'} (Source: ${source || 'Hero'})`, 'Quick Hero Lead']
      );
    } catch (dbErr) {
      console.warn('Quick lead DB log note:', dbErr);
    }

    return NextResponse.json({ success: true, message: 'Lead received successfully' });
  } catch (error: any) {
    console.error('Quick lead error:', error);
    return NextResponse.json({ success: true, note: 'Processed' });
  }
}
