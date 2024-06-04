'use client';
import React, { FC, useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: any) => void;
}

interface Option {
  id: number;
  name: string;
  favorite: boolean;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setSelectedType(null);
      setSelectedItem(null);
      setSearchTerm('');
    }
  }, [isOpen]);

  const options: Option[] = [
    { id: 1, name: 'Cohort', favorite: false },
    { id: 2, name: 'Individual Patient', favorite: false },
    { id: 3, name: 'Saved Analyses', favorite: false },
    { id: 4, name: 'Recent Analysis', favorite: false }
  ];

  const cohorts: Option[] = [
    { id: 1, name: 'Inpatient', favorite: false },
    { id: 2, name: 'Internal Medicine', favorite: false },
    { id: 3, name: 'Family Medicine', favorite: false },
    { id: 4, name: 'Hematology', favorite: false }
  ];

  const patients: Option[] = [
    { id: 1, name: '12345 - Doe, John', favorite: false },
    { id: 2, name: '67890 - Doe, Jane', favorite: false },
    { id: 3, name: '23456 - Ramirez, Jose', favorite: false },
    { id: 4, name: '34567 - Ramirez, John', favorite: false }
  ];

  const sanalyses: Option[] = [
    { id: 1, name: 'Internal Medicine', favorite: false },
    { id: 2, name: 'Family Medicine', favorite: false },
    { id: 3, name: 'Hematology', favorite: false },
    { id: 4, name: 'Oncology', favorite: false },
    { id: 5, name: 'Cardiology', favorite: false },
    { id: 6, name: 'Urology', favorite: false },
    { id: 7, name: 'General Surgery, CV', favorite: false },
    { id: 8, name: 'General Surgery, GI', favorite: false },
    { id: 9, name: 'Neurosurgery', favorite: false }
  ];

  const indicators: Option[] = [
    { id: 1, name: 'Charlson Comorbidity Score', favorite: true},
    { id: 2, name: 'eFrailty Score', favorite: true },
    { id: 3, name: 'Number of HCCs', favorite: true },
    { id: 4, name: 'Dx of DM', favorite: false },
    { id: 5, name: 'SOFA Score', favorite: false },
    { id: 6, name: 'Apache', favorite: false},
    { id: 7, name: 'ICU', favorite: true },
    { id: 8, name: 'Cardiology', favorite: true },
    { id: 9, name: 'PreOp', favorite: true },
    { id: 10, name: 'Managed Care', favorite: false },
    { id: 11, name: 'Drug Adverse Events', favorite: false },
    { id: 12, name: 'SeDOH', favorite: false }
  ];

  const poutcomes: Option[] = [
    { id: 1, name: 'Mortality Risk', favorite: true},
    { id: 2, name: 'Length of Stay', favorite: true },
    { id: 3, name: 'Readmission 30-60-90 days', favorite: true },
    { id: 4, name: 'Escalation of Care', favorite: true },
    { id: 5, name: 'Breast Cancer Reoccurence', favorite: false },
    { id: 6, name: 'Suspected Hepatocellular', favorite: false},
    { id: 7, name: 'Carcinoma', favorite: false },
    { id: 8, name: 'Member Retention', favorite: false },
    { id: 9, name: 'Appointment No-shows', favorite: false }
  ];

  
  

  const handleNext = () => {
    if (step === 1 && selectedItem) {
      setStep(2);
    } else if (step === 2 && selectedType) {
      setStep(3);
    } else if (step === 3) {
      onConfirm({ selectedType, selectedItem });
      onClose();
    }
  };

  const handleBack = () => {
    if (step === 1) {
      setStep(1);
      setSelectedType(null); // Reset selected type when going back from step 2 to step 1
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStepContent = () => {
    switch (step) {


      case 1:
  return (
    <>
      {step === 1 && selectedType === 'Cohort' ? (
        <>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Select Cohort</h3>
          <div className="mt-2">
            <div className="relative">
              <input
                type="text"
                className="border rounded-lg p-2 w-full"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-3 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="border rounded-lg p-4 mt-2 max-h-60 overflow-y-auto">
              {cohorts
                .filter(cohort => cohort.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(cohort => (
                  <div key={cohort.id} className="flex items-center my-2">
                    <input
                      type="checkbox"
                      id={`cohort-${cohort.id}`}
                      value={cohort.name}
                      checked={selectedItem === cohort.name}
                      onChange={() => setSelectedItem(cohort.name)}
                      className="mr-2"
                    />
                    <label htmlFor={`cohort-${cohort.id}`} className="text-gray-900">{cohort.name}</label>
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : step === 1 && selectedType === 'Individual Patient' ? (
        <>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Select Patient</h3>
          <div className="mt-2">
            <div className="relative">
              <input
                type="text"
                className="border rounded-lg p-2 w-full"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-3 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="border rounded-lg p-4 mt-2 max-h-60 overflow-y-auto">
              {patients
                .filter(patient => patient.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(patient => (
                  <div key={patient.id} className="flex items-center my-2">
                    <input
                      type="checkbox"
                      id={`cohort-${patient.id}`}
                      value={patient.name}
                      checked={selectedItem === patient.name}
                      onChange={() => setSelectedItem(patient.name)}
                      className="mr-2"
                    />
                    <label htmlFor={`cohort-${patient.id}`} className="text-gray-900">{patient.name}</label>
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : step === 1 && selectedType === 'Saved Analyses' ? (
        <>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Saved Analyses</h3>
          <div className="mt-2">
            <div className="relative">
              <input
                type="text"
                className="border rounded-lg p-2 w-full"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-3 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="border rounded-lg p-4 mt-2 max-h-60 overflow-y-auto">
              {sanalyses
                .filter(analysis => analysis.name.toLowerCase().includes(searchTerm))
                .map(analysis => (
                  <div key={analysis.id} className="flex items-center my-2">
                    <input
                      type="checkbox"
                      id={`cohort-${analysis.id}`}
                      value={analysis.name}
                      checked={selectedItem === analysis.name}
                      onChange={() => setSelectedItem(analysis.name)}
                      className="mr-2"
                    />
                    <label htmlFor={`cohort-${analysis.id}`} className="text-gray-900">{analysis.name}</label>
                  </div>
                ))}
            </div>
          </div>
        </>
      ):(
        <>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Select Type</h3>
          <div className="mt-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {options.map(option => (
                <button
                  key={option.id}
                  className={`border rounded-lg p-4 ${selectedType === option.name ? 'border-red-600' : 'border-gray-300'}`}
                  onClick={() => setSelectedType(option.name)}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );



case 2:
        return (
          <>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Select Indicators</h3>
            <div className="border rounded-lg p-4 mt-2 max-h-60 overflow-y-auto">
            <div className="relative">
              <input
                type="text"
                className="border rounded-lg p-2 w-full"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-3 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="border rounded-lg p-4 mt-2 max-h-60 overflow-y-auto">
              {indicators
                .filter(indicator => indicator.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(indicator => (
                  <div key={indicator.id} className="flex items-center my-2">
                    <input
                      type="checkbox"
                      id={`cohort-${indicator.id}`}
                      value={indicator.name}
                      checked={selectedItem === indicator.name}
                      onChange={() => setSelectedItem(indicator.name)}
                      className="mr-2"
                    />
                    <label htmlFor={`cohort-${indicator.id}`} className="text-gray-900">{indicator.name}</label>
                    {indicator.favorite && <FaStar className="ml-auto text-gray-500" />}

                  </div>
                ))}
            </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Select Predicted Outcome</h3>
            <div className="border rounded-lg p-4 mt-2 max-h-60 overflow-y-auto">
            <div className="relative">
              <input
                type="text"
                className="border rounded-lg p-2 w-full"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-3 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="border rounded-lg p-4 mt-2 max-h-60 overflow-y-auto">
              {poutcomes
                .filter(outcome => outcome.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(outcome => (
                  <div key={outcome.id} className="flex items-center my-2">
                    <input
                      type="checkbox"
                      id={`cohort-${outcome.id}`}
                      value={outcome.name}
                      checked={selectedItem === outcome.name}
                      onChange={() => setSelectedItem(outcome.name)}
                      className="mr-2"
                    />
                    <label htmlFor={`cohort-${outcome.id}`} className="text-gray-900">{outcome.name}</label>
                    {outcome.favorite && <FaStar className="ml-auto text-gray-500" />}

                  </div>
                ))}
            </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`fixed inset-0 z-10 overflow-y-auto ${isOpen ? '' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl w-full">
          <div className="bg-white px-6 pt-6 pb-4 sm:p-6 sm:pb-4">
            <div className="text-center sm:text-left">
            <div className="flex justify-between items-center">
  <h3 className="text-lg leading-6 font-medium text-gray-900">Create New Analysis</h3>
  <button
    type="button"
    className="text-gray-500 hover:text-gray-700 focus:outline-none"
    onClick={onClose}
  >
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</div>

              <hr className="my-4 border-black" />
              <div className="flex justify-between items-center">
  <div className="flex w-full">
    {['Select Cohort', 'Select Indicators', 'Select Predicted Outcome'].map((title, index) => (
      <StepItem key={index} title={title} step={index + 1} currentStep={step} />
    ))}
  </div>
  <div>
    <span className="text-sm text-gray-400">{step}/3</span>
  </div>
</div>

              <div className="mt-2">
                {renderStepContent()}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#990000] text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#990000] sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleNext}
              disabled={step === 1 ? !selectedItem : step === 2 && (!selectedType || !selectedItem)}

            >
              {step === 3 ? 'Submit' : 'Next'}
            </button>
            {step > 0 && (
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
                onClick={handleBack}
              >
                Back
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const StepItem: FC<{ title: string; step: number; currentStep: number }> = ({ title, step, currentStep }) => {
  const isActive = step <= currentStep;
  return (
    <div className="flex flex-col items-center flex-1">
  <span className={`text-base font-medium ${isActive ? 'text-[#990000]' : 'text-gray-400'}`}>{title}</span>
  <div className={`w-full h-1 ${isActive ? 'bg-[#990000]' : 'bg-gray-300'} mt-1`}></div>
</div>

  );
};

export default Modal;






























