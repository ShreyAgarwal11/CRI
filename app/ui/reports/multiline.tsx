'use client';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';
import { HealthMetric } from '@/app/lib/definitions';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

interface MultiLineChartProps {
  data: HealthMetric[];
}

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const datasetOptions = [
  { label: 'Mortality Risk', borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.5)', pointStyle: 'circle' },
  { label: 'Length of Stay', borderColor: 'rgb(54, 162, 235)', backgroundColor: 'rgba(54, 162, 235, 0.5)', pointStyle: 'star' },
  { label: 'Readmission 30-60-90 days', borderColor: 'rgb(255, 206, 86)', backgroundColor: 'rgba(255, 206, 86, 0.5)', pointStyle: 'rect' },
  { label: 'Escalation of Care', borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.5)', pointStyle: 'triangle' },
  { label: 'Breast Cancer Reoccurrence', borderColor: 'rgb(153, 102, 255)', backgroundColor: 'rgba(153, 102, 255, 0.5)', pointStyle: 'cross' },
  { label: 'Suspected Hepatocellular Carcinoma', borderColor: 'rgb(255, 159, 64)', backgroundColor: 'rgba(255, 159, 64, 0.5)', pointStyle: 'circle' },
  { label: 'Member Retention', borderColor: 'rgb(199, 199, 199)', backgroundColor: 'rgba(199, 199, 199, 0.5)', pointStyle: 'star' },
  { label: 'Appointment No-shows', borderColor: 'rgb(255, 99, 71)', backgroundColor: 'rgba(255, 99, 71, 0.5)', pointStyle: 'rect' },
];

const MultiLineChart: React.FC<MultiLineChartProps> = ({ data }) => {
  const [chartData, setChartData] = useState<ChartData<'line'>>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const labels = data.map(d => new Date(d.month).toLocaleDateString()); // Ensure proper date formatting

    const datasets = datasetOptions.map((option) => {
      const dataKey = option.label.replace(/\s+/g, '_').toLowerCase() as keyof HealthMetric;
      const metricData = data.map(d => {
        const value = parseFloat(String(d[dataKey]));
        return typeof value === 'number' ? value : 0;
      });

      console.log(`Data for ${option.label}:`, metricData); // Debug: Log the dataset for each option

      return {
        label: option.label,
        data: metricData,
        borderColor: option.borderColor,
        backgroundColor: option.backgroundColor,
        borderWidth: 1,
        pointStyle: option.pointStyle,
        fill: true,
      };
    });

    setChartData({ labels, datasets });
  }, [data]);

  return (
    <div className="flex flex-col items-center w-full p-4 bg-white border border-black shadow-md">
      <div className="w-full mb-6">
        <Line data={chartData} options={options} />
      </div>
      <div className="flex flex-wrap justify-between w-full grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="text-center">
          <label className="block text-black font-bold mb-2">Patient Name</label>
          <div className="bg-white p-2 rounded border border-gray-400">John Doe</div>
        </div>
        <div className="text-center">
          <label className="block text-black font-bold mb-2">Location Name</label>
          <div className="bg-white p-2 rounded border border-gray-400">Keck Medicine of USC</div>
        </div>
        <div className="text-center">
          <label className="block text-black font-bold mb-2">Outcome</label>
          <div className="bg-white p-2 rounded border border-gray-400">90-day Mortality</div>
        </div>
        <div className="text-center">
          <label className="block text-black font-bold mb-2">Service Line</label>
          <div className="bg-white p-2 rounded border border-gray-400">Outpatient</div>
        </div>
      </div>
    </div>
  );
};

export default MultiLineChart;




















