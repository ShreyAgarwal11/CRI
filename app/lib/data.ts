import { sql } from '@vercel/postgres';
import { HealthMetric } from './definitions';

export default async function fetchHealthData() {
  try {
    const data = await sql<HealthMetric>`SELECT * FROM health_metrics_new`;
    console.log(data);
    
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch health data.');
  }
}

