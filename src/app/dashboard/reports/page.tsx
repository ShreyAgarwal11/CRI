import MultiLineChart from "@/app/ui/reports/MultiLine";
import fetchHealthData from "@/app/lib/data";

export default async function Page() {
    const data = await fetchHealthData();
    return (
      <MultiLineChart data = {data} />
    );
}

