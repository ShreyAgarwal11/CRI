import DataTable from "@/app/ui/data/table"
import fetchHealthData from "@/app/lib/healthData";

export default async function Page() {
    const healthData = await fetchHealthData();
      return <DataTable data = {healthData}/>
    }