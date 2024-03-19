export type HealthMetric  = {
  id: number;
  month: Date;
  thirty_day_mortality: number;
  sixty_day_mortality: number;
  ninety_day_mortality: number;
  efrailty: number;
  mesh: number;
};