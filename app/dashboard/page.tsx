import fetchPatientData from "../lib/patient";
import fetchHealthData from "../lib/healthData";
import FeatureSelector from "../ui/selections/features";
import Selection1 from "../ui/selections/selection1";
import MultiLineChart from "../ui/reports/multiline";
import Features from "../ui/reports/columns";
import Slidein from "../ui/dashboard/Slide-in";
import { HealthMetric, PatientMetric } from '../lib/definitions';

export default async function Page() {
  const patientData: PatientMetric[] = await fetchPatientData();
  const healthData: HealthMetric[] = await fetchHealthData();

  return (
    <div className="flex w-full h-full min-h-screen">
      {/* Column 1: Selection Component */}
      <div className="flex-2">
        <div className="flex-grow">
          <Selection1 patients={patientData} />
        </div>
        <div className="flex-grow">
          <FeatureSelector />
        </div>
      </div>
      {/* Column 2: Main content component, made larger */}
      <div className="flex-1">
        <div className="flex-grow">
          <MultiLineChart data={healthData} />
        </div>
        <div className="flex-grow">
          <Features />
        </div>
      </div>
      <div className="flex-3">
        <Slidein />
      </div>
    </div>
  );
}








