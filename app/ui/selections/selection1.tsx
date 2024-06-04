'use client';
import React, { useState, useEffect } from 'react';
import { PatientMetric, CohortMetric } from '@/app/lib/definitions';

interface Props {
  patients: PatientMetric[];
}

const cohorts: CohortMetric[] = [
  { id: 1, cohort_name: 'Inpatient'},
  { id: 2, cohort_name: 'Internal Medicine'},
  { id: 3, cohort_name: 'Family Medicine'},
  { id: 4, cohort_name: 'Hematology'}
];

const Selection1: React.FC<Props> = ({patients }) => {
  const [data, setData] = useState<(PatientMetric | CohortMetric)[]>([]);
  const [filteredData, setFilteredData] = useState<(PatientMetric | CohortMetric)[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<'patients' | 'cohorts'>('patients');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    handleDataSelection('patients');
  }, [patients, cohorts]);

  const handleDataSelection = (type: 'patients' | 'cohorts') => {
    const selectedData = type === 'cohorts' ? cohorts : patients;
    setData(selectedData);
    setFilteredData(selectedData);
    setActiveButton(type);
  };

  const handleItemClick = (name: string) => {
    setSelectedItem(name);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item =>
        'first_name' in item
          ? `${item.first_name} ${item.last_name}`.toLowerCase().includes(term.toLowerCase())
          : item.cohort_name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="border border-black w-full mx-auto shadow-md">
      <div className="flex border-b border-black">
        <button
          className={`flex-1 py-2 text-center ${activeButton === 'cohorts' ? 'bg-white text-black' : 'bg-gray-200 text-gray-500'} focus:outline-none hover:bg-gray-50`}
          onClick={() => handleDataSelection('cohorts')}
        >
          Cohort Select
        </button>
        <button
          className={`flex-1 py-2 text-center ${activeButton === 'patients' ? 'bg-white text-black' : 'bg-gray-200 text-gray-500'} focus:outline-none hover:bg-gray-50`}
          onClick={() => handleDataSelection('patients')}
        >
          Patient Select
        </button>
      </div>
      <div>
        <div className="relative">
        <input
  type="text"
  value={searchTerm}
  onChange={handleSearch}
  placeholder="Search"
  className="w-full focus:outline-none focus:border-blue-500"
/>

          <svg className="w-6 h-6 text-black absolute top-1/2 right-3 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.65 11.65A5.65 5.65 0 1111 6a5.65 5.65 0 015.65 5.65z" />
          </svg>
        </div>
      </div>
      <div className="h-64 overflow-y-auto">
        {filteredData.length > 0 && (
          <ul className="list-none p-0">
            {filteredData.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick('first_name' in item ? `${item.first_name} ${item.last_name}` : item.cohort_name)}
                className={`cursor-pointer p-2 ${selectedItem === ('first_name' in item ? `${item.first_name} ${item.last_name}` : item.cohort_name) ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-50`}
              >
                {'first_name' in item ? `${item.first_name} ${item.last_name}` : item.cohort_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Selection1;














