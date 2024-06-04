'use client';
import React, { useState } from 'react';

interface Outcome {
  name: string;
  favorite: boolean;
}

const outcomes: Outcome[] = [
  { name: 'Mortality Risk', favorite: true },
  { name: 'Length of Stay', favorite: false },
  { name: 'Readmission 30-60-90 days', favorite: false },
  { name: 'Escalation of Care', favorite: false },
  { name: 'Breast Cancer Reoccurance', favorite: false },
  { name: 'Suspected Hepatocellular Carcinoma', favorite: false },
  { name: 'Member Retention', favorite: false },
  { name: 'Appointment No-shows', favorite: false },
  { name: 'And many more', favorite: false },
];

const PredictedOutcome: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOutcomes, setSelectedOutcomes] = useState<string[]>([]);

  const toggleOutcomeSelection = (outcome: string) => {
    const isSelected = selectedOutcomes.includes(outcome);
    const updatedOutcomes = isSelected
      ? selectedOutcomes.filter(item => item !== outcome)
      : [...selectedOutcomes, outcome];
    setSelectedOutcomes(updatedOutcomes);
  };

  const filteredFeatures = outcomes.filter((outcome) =>
    outcome.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-md mx-auto p-4 border border-black shadow-md">
      <h2 className="text-lg font-bold mb-2">Predicted Outcome</h2>
      <div className="border border-black">
        <div className="relative mb-4 flex items-center">
          <svg
            className="w-6 h-6 text-black absolute right-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M16.65 11.65A5.65 5.65 0 1111 6a5.65 5.65 0 015.65 5.65z"
            />
          </svg>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="w-full border focus:outline-none"
          />
        </div>
        <div className="h-64 overflow-y-auto">
          {filteredFeatures.length > 0 && (
            <ul className="list-none p-0">
              {filteredFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={() => toggleOutcomeSelection(feature.name)}
                      checked={selectedOutcomes.includes(feature.name)}
                    />
                    <label>{feature.name}</label>
                  </div>
                  {feature.favorite && (
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.447a1 1 0 00-.364 1.118l1.287 3.945c.3.921-.755 1.688-1.538 1.118l-3.36-2.447a1 1 0 00-1.175 0l-3.36 2.447c-.783.57-1.838-.197-1.538-1.118l1.287-3.945a1 1 0 00-.364-1.118L2.225 9.372c-.783-.57-.381-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.945z" />
                    </svg>
                  )}
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredictedOutcome;



