import MultiLineChart from "@/app/ui/reports/multiline";
import fetchHealthData from "@/app/lib/data";
import CardGrid from "@/app/ui/reports/cards";
import Features from "@/app/ui/reports/columns";
import EFrailtyModal from "@/app/ui/reports/popup";

export default async function Page() {
  const healthData = await fetchHealthData();
    return(
      <>
        <MultiLineChart data = {healthData}/>
        <Features />
      </>
    );
  };