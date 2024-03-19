import { lusitana } from '@/app/ui/fonts';
import fetchHealthData from '../lib/data';
import MultiLineChart from '../ui/dashboard/multiline';
 
export default async function Page() {
    const chartData = await fetchHealthData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
    </main>
  );
}