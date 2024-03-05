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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

interface HealthMetric {
  month: string;
  thirty_day_mortality: number;
  sixty_day_mortality: number;
  ninety_day_mortality: number;
  efrailty: number;
  mesh: number;
}

interface MultiLineChartProps {
  data: HealthMetric[];
}

const datasetOptions = [
  { label: 'Thirty Day Mortality', borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.5)', isVisible: true },
  { label: 'Sixty Day Mortality', borderColor: 'rgb(54, 162, 235)', backgroundColor: 'rgba(54, 162, 235, 0.5)', isVisible: true },
  { label: 'Ninety Day Mortality', borderColor: 'rgb(255, 206, 86)', backgroundColor: 'rgba(255, 206, 86, 0.5)', isVisible: true },
  { label: 'eFrailty', borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.5)', isVisible: true },
  { label: 'MESH', borderColor: 'rgb(153, 102, 255)', backgroundColor: 'rgba(153, 102, 255, 0.5)', isVisible: true },
];

const options: ChartOptions<'line'> = {
  plugins: {
    legend: {
      display: false, // Hide the default legend to use the custom one
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
    const labels = data.map(d => d.month);
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
        fill: true,
      };
    });

    setChartData({ labels, datasets });
}, [data, visibleDatasets]); // Make sure to add visibleDatasets as a dependency


  return (
    <div className="flex flex-col items-center">
      <Line data={chartData} options={options} />
      <div className="flex justify-center mt-4">
        {datasetOptions.map((dataset, index) => (
          <div key={index} className="flex items-center mr-4">
            <input
              type="checkbox"
              id={`checkbox-${dataset.label}`}
              className="mr-2"
              checked={visibleDatasets[dataset.label]}
              onChange={(e) => {
                const newVisibility = { ...visibleDatasets, [dataset.label]: e.target.checked };
                setVisibleDatasets(newVisibility);
              }}
            />
            <label htmlFor={`checkbox-${dataset.label}`} style={{ color: dataset.borderColor }}>{dataset.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiLineChart;



