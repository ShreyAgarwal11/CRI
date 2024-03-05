import { sql } from '@vercel/postgres';
import { HealthMetric } from './definition';

export default async function fetchHealthData() {
  try {
    const data = await sql<HealthMetric>`SELECT * FROM health_metrics`;
    
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

