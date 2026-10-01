'use server';

import { query } from '@/lib/db';
import { headers } from 'next/headers';

/**
 * Internal Security Actions for Node Exclusion.
 */

export async function createExclusionRequest(fingerprint: string) {
  try {
    const headerList = await headers();
    const ip = headerList.get('x-forwarded-for') || '127.0.0.1';

    await query(
      'INSERT INTO exclusion_requests (ip_address, fingerprint) VALUES ($1, $2) ON CONFLICT (fingerprint) DO UPDATE SET ip_address = $1',
      [ip, fingerprint]
    );

    // Admin notifications have been decoupled to the external admin portal.
    // The CRM/Admin system will periodically poll the database for new exclusion requests.

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
