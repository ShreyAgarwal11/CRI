import MultiLineChart from "@/app/ui/dashboard/multiline";
import fetchHealthData from "@/app/lib/data";

export default async function Page() {
  const healthData = await fetchHealthData();
    return <MultiLineChart data = {healthData}/>
  }