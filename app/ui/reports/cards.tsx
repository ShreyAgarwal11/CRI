'use client';
import React, { useState } from 'react';

type CardProps = {
  title: string;
  options: string[];
};

const CardGrid: React.FC = () => {
  const cardsData: CardProps[] = [
    { title: 'Speciality', options: ['Internal Medicine', 'Pediatrics', 'Surgery'] },
    { title: 'Setting', options: ['Outpatient', 'Inpatient', 'Emergency'] },
    { title: 'Name', options: ['Doe, Joe', 'Smith, Alice', 'Brown, John'] },
    { title: 'Location Name', options: ['Keck Medicine of USC', 'Mayo Clinic', 'Johns Hopkins Hospital'] },
  ];

  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});

  const handleChange = (title: string, event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOptions({ ...selectedOptions, [title]: value });
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cardsData.map((card, index) => (
        <div key={index} className="bg-[#990000] p-4 rounded shadow-md">
          <h2 className="font-bold text-xl mb-2 text-white">{card.title}</h2>
          <select
            className="p-2 rounded border border-gray-300"
            onChange={(event) => handleChange(card.title, event)}
            value={selectedOptions[card.title] || ''}
            style={{ width: '100%' }}
          >
            <option value="" disabled>Select {card.title}</option>
            {card.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {selectedOptions[card.title] && (
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 mt-2 bg-[#990000]">
              <div className="font-bold text-xl mb-2 text-white">{card.title}</div>
              <p className="text-white text-base">{selectedOptions[card.title]}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;




