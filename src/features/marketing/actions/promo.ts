'use server';

import { query } from '@/lib/db';

/**
 * Validates a promo code against the database.
 */
export async function validatePromoCode(code: string) {
  try {
    const cleanCode = code.trim().toUpperCase();
    const res = await query(
      `SELECT * FROM promo_codes 
       WHERE code = $1 AND is_active = true 
       AND (expires_at > NOW() OR expires_at IS NULL)
       AND (usage_count < usage_limit OR usage_limit IS NULL)`,
      [cleanCode]
    );

    if (res.rows.length === 0) {
      return { success: false, error: 'Invalid or expired code.' };
    }

    const promo = res.rows[0];
    return { 
      success: true, 
      promo: {
        code: promo.code,
        type: promo.discount_type,
        value: parseFloat(promo.discount_value)
      } 
    };
  } catch (error) {
    console.error('Validation error:', error);
    return { success: false, error: 'Validation failed.' };
  }
}

/**
 * Increments the usage count of a promo code.
 * Called only when a form is successfully submitted.
 */
export async function incrementPromoUsage(code: string) {
  try {
    await query(
      'UPDATE promo_codes SET usage_count = usage_count + 1 WHERE code = $1',
      [code.trim().toUpperCase()]
    );
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}

/**
 * Admin: Get all promo codes.
 */
export async function getPromoCodes() {
  try {
    const res = await query('SELECT * FROM promo_codes ORDER BY created_at DESC');
    return res.rows;
  } catch (e) {
    return [];
  }
}

/**
 * Admin: Upsert promo code.
 */
export async function upsertPromoCode(data: any) {
  try {
    const { id, code, discount_type, discount_value, usage_limit, expires_at, is_active } = data;
    const cleanCode = code.trim().toUpperCase();

    if (id) {
      await query(
        `UPDATE promo_codes SET 
          code = $1, discount_type = $2, discount_value = $3, 
          usage_limit = $4, expires_at = $5, is_active = $6 
         WHERE id = $7`,
        [cleanCode, discount_type, discount_value, usage_limit, expires_at, is_active, id]
      );
    } else {
      await query(
        `INSERT INTO promo_codes (code, discount_type, discount_value, usage_limit, expires_at, is_active) 
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [cleanCode, discount_type, discount_value, usage_limit, expires_at, is_active]
      );
    }
    return { success: true };
  } catch (e: any) {
    return { success: false, error: e.message };
  }
}

/**
 * Admin: Delete promo code.
 */
export async function deletePromoCode(id: number) {
  try {
    await query('DELETE FROM promo_codes WHERE id = $1', [id]);
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}
