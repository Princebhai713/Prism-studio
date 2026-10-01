
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Neon and other cloud Postgres providers
  },
});

/**
 * Execute a PostgreSQL query.
 * @param text The SQL query text.
 * @param params The query parameters.
 */
export async function query(text: string, params?: any[]) {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    // You can uncomment the line below if you ever need to debug database queries again
    // console.log('Executed query', { text, duration: Date.now() - start, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('PostgreSQL query error:', error);
    throw error;
  }
}

export default pool;
