import { sql } from '@vercel/postgres';
import { PatientMetric } from './definitions';

export default async function fetchPatientData() {
  try {
    const data = await sql<PatientMetric>`SELECT * FROM patients`;
    console.log(data);
    
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch health data.');
  }
}