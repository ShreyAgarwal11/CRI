export type HealthMetric  = {
  id: number;
  month: Date;
  mortality_risk: number;
  length_of_stay: number;
  readmission_30_60_90_day: number;
  escalation_of_care: number;
  breast_cancer_reoccurrence: number;
  suspected_hepatocellular_carcinoma: number;
  member_retention: number;
  appointment_no_shows: number;
};

export type PatientMetric = {
  id: number;
  first_name: string;
  last_name: string;
}

export type CohortMetric = {
  id: number;
  cohort_name: string;
}