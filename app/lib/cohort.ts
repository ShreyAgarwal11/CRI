import { sql } from '@vercel/postgres';
import { CohortMetric } from './definitions';

export default async function fetchCohortData() {
  try {
    const data = await sql<CohortMetric>`SELECT * FROM cohort`;
    console.log(data);
    
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch health data.');
  }
}