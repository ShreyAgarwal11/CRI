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
import Select from 'react-select';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

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

interface VisibleDatasets {
  [key: string]: boolean;
}

const MultiLineChart: React.FC<MultiLineChartProps> = ({ data }) => {
  const [chartData, setChartData] = useState<ChartData<'line'>>({
    labels: [],
    datasets: [],
  });

  const datasetOptions = [
    { label: 'Thirty Day Mortality', borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.5)', pointStyle: 'circle', isVisible: true },
    { label: 'Sixty Day Mortality', borderColor: 'rgb(54, 162, 235)', backgroundColor: 'rgba(54, 162, 235, 0.5)', pointStyle: 'star' , isVisible: true },
    { label: 'Ninety Day Mortality', borderColor: 'rgb(255, 206, 86)', backgroundColor: 'rgba(255, 206, 86, 0.5)', pointStyle: 'rect', isVisible: true },
    { label: 'eFrailty', borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.5)', pointStyle: 'triangle', isVisible: true },
    { label: 'MESH', borderColor: 'rgb(153, 102, 255)', backgroundColor: 'rgba(153, 102, 255, 0.5)',pointStyle: 'cross', isVisible: true },
  ];

  const [visibleDatasets, setVisibleDatasets] = useState<VisibleDatasets>(
    datasetOptions.reduce((acc: VisibleDatasets, option) => {
      acc[option.label] = true;
      return acc;
    }, {})
  );

  useEffect(() => {
    const labels = data.map(d => d.month.toLocaleDateString());
    const datasets = datasetOptions.filter(option => visibleDatasets[option.label]).map((option) => {
      const dataKey = option.label.replace(/\s+/g, '_').toLowerCase() as keyof HealthMetric;
      const metricData = data.map(d => {
        const value = d[dataKey];
        return typeof value === 'number' ? value : 0;
      });

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
}, [data, visibleDatasets]);

const handleOutcomeChange = (selectedOptions: { value: string; label: string; }[] | null) => {
  if (selectedOptions && Array.isArray(selectedOptions)) {
    const selectedOutcomes = selectedOptions.map(option => option.value);
    const newVisibleDatasets: VisibleDatasets = {};
    datasetOptions.forEach(option => {
      newVisibleDatasets[option.label] = selectedOutcomes.includes(option.label);
    });
    setVisibleDatasets(newVisibleDatasets);
  }
};



const specialityOptions = ['Internal Medicine', 'Pediatrics', 'Surgery'];
const settingOptions = ['Outpatient', 'Inpatient', 'Emergency'];
const nameOptions = ['Doe, Joe', 'Smith, Alice', 'Brown, John'];
const locationNameOptions = ['Keck Medicine of USC', 'Mayo Clinic', 'Johns Hopkins Hospital'];

return (
  <div className="flex flex-col items-center w-full px-4 shadow-lg p-4 rounded-lg border-2 border-[#990000]">
    <div className="flex flex-wrap justify-between w-full mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="w-full mb-4 bg-[#990000] p-5">
        <label htmlFor="speciality" className="block text-white font-bold mb-2">Speciality</label>
        <select id="speciality" className="p-2 rounded border border-gray-300" style={{ width: '100%' }}>
          {specialityOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full mb-4 bg-[#990000] p-5">
        <label htmlFor="setting" className="block text-white font-bold mb-2">Setting</label>
        <select id="setting" className="p-2 rounded border border-gray-300" style={{ width: '100%' }}>
          {settingOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full md:w-auto mb-4 bg-[#990000] p-5">
        <label htmlFor="name" className="block text-white font-bold mb-2">Name</label>
        <select id="name" className="p-2 rounded border border-gray-300" style={{ width: '100%' }}>
          {nameOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div className="flex flex-wrap justify-between w-full mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="w-full sm:w-1/2 md:w-auto mb-4 bg-[#990000] p-5">
        <label htmlFor="location" className="block text-white font-bold mb-2">Location Name</label>
        <select id="location" className="p-2 rounded border border-gray-300" style={{ width: '100%' }}>
          {locationNameOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full sm:w-1/2 md:w-auto mb-4 bg-[#990000] p-5 relative">
  <label htmlFor="outcomes" className="block text-white font-bold mb-2">Outcome</label>
  <Select
    id="outcomes"
    className="p-2 rounded border border-gray-300"
    options={datasetOptions.map(option => ({ value: option.label, label: option.label }))}
    isMulti
    menuPlacement="top"
    styles={{ 
      control: provided => ({ ...provided, maxHeight: '10px', overflowY: 'auto'  }), // Set a fixed height for the control
    }}
    onChange={(selectedOptions) => {
      if (selectedOptions) {
        const selectedValues = selectedOptions.map(option => ({ value: option.value, label: option.label }));
        handleOutcomeChange(selectedValues);
      }
    }}
  />
</div>



</div>
<div className="w-full">
<Line data={chartData} options={options} />
</div>
</div>
);
};

export default MultiLineChart;











