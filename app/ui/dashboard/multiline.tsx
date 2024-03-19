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
  Legend,
} from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';
import { HealthMetric } from '@/app/lib/definitions';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

interface MultiLineChartProps {
  data: HealthMetric[];
}

const datasetOptions = [
  { label: 'Thirty Day Mortality', borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.5)', pointStyle: 'circle', isVisible: true },
  { label: 'Sixty Day Mortality', borderColor: 'rgb(54, 162, 235)', backgroundColor: 'rgba(54, 162, 235, 0.5)', pointStyle: 'star' , isVisible: true },
  { label: 'Ninety Day Mortality', borderColor: 'rgb(255, 206, 86)', backgroundColor: 'rgba(255, 206, 86, 0.5)', pointStyle: 'rect', isVisible: true },
  { label: 'eFrailty', borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.5)', pointStyle: 'triangle', isVisible: true },
  { label: 'MESH', borderColor: 'rgb(153, 102, 255)', backgroundColor: 'rgba(153, 102, 255, 0.5)',pointStyle: 'cross', isVisible: true },
];

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: true, // Hide the default legend to use the custom one
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

interface VisibleDatasets {
  [key: string]: boolean;
}

const MultiLineChart: React.FC<MultiLineChartProps> = ({ data }) => {
  const [chartData, setChartData] = useState<ChartData<'line'>>({
    labels: [],
    datasets: [],
  });

  const [visibleDatasets, setVisibleDatasets] = useState<VisibleDatasets>(
    datasetOptions.reduce((acc: VisibleDatasets, option) => {
      acc[option.label] = true; // Start with all datasets visible. Adjusted option.isVisible to true for clarity.
      return acc;
    }, {})
  );

  useEffect(() => {
    const labels = data.map(d => d.month.toLocaleDateString());
    const datasets = datasetOptions.filter(option => visibleDatasets[option.label]).map((option) => {
      // Convert label to a key in the HealthMetric interface
      const dataKey = option.label.replace(/\s+/g, '_').toLowerCase() as keyof HealthMetric;
      const metricData = data.map(d => {
        const value = d[dataKey];
        // Ensure the value is a number, providing a fallback of 0 if undefined
        return typeof value === 'number' ? value : 0; // This ensures the data array consists of numbers only
      });

      return {
        label: option.label,
        data: metricData, // This should now be strictly an array of numbers
        borderColor: option.borderColor,
        backgroundColor: option.backgroundColor,
        borderWidth: 1,
        pointStyle: option.pointStyle,
        fill: true,
      };
    });

    setChartData({ labels, datasets });
}, [data, visibleDatasets]); // Make sure to add visibleDatasets as a dependency


  return (
    <div className="flex flex-col items-center w-full px-4">
    <Line data={chartData} options={options} />
    <div className="w-full mt-4 bg-[#990000] p-4 rounded-md">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {datasetOptions.map((dataset, index) => (
          <label key={index} htmlFor={`checkbox-${dataset.label}`} className="flex items-center gap-2 cursor-pointer hover:text-[#231F20]">
            <input
              type="checkbox"
              id={`checkbox-${dataset.label}`}
              className="form-checkbox text-[#231F20] rounded border-gray-300 shadow-sm focus:border-[#231F20] focus:ring focus:ring-offset-0 focus:ring-[#231F20] focus:ring-opacity-50"
              checked={visibleDatasets[dataset.label]}
              onChange={(e) => {
                const newVisibility = { ...visibleDatasets, [dataset.label]: e.target.checked };
                setVisibleDatasets(newVisibility);
              }}
            />
            <span className="text-sm sm:text-base text-white">{dataset.label}</span>
          </label>
        ))}
      </div>
    </div>
  </div>
  );
};

export default MultiLineChart;
