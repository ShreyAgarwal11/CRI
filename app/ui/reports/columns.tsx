'use client';
import { useState } from "react";
import EFrailtyDialog from "./popup";

export default function Features() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeButton, setActiveButton] = useState('Breakdown'); // Initially set the 'Breakdown' button as active

    function handleDataSelection(selection: string) {
        setActiveButton(selection);
    }

    return (
        <div className="border p-4 border-gray-300">
            <div className="flex justify-between mt-6">
                {['Breakdown', 'Patient Details', 'Recent', 'Saved'].map((btn) => (
                    <button
                        key={btn}
                        className={`flex-1 py-2 text-center border border-gray-300 ${activeButton === btn ? 'bg-gray-200' : 'bg-white'} focus:outline-none`}
                        onClick={() => handleDataSelection(btn)}
                    >
                        {btn.charAt(0).toUpperCase() + btn.slice(1)}
                    </button>
                ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-5 my-8">
                <h4 className="text-4xl font-semibold leading-6 text-gray-900">Risk of 90-Day Mortality</h4>
                <div className="flex items-center gap-8">
                    <p className="inline-flex items-center justify-center p-2 text-4xl leading-6 text-gray-700 border border-gray-300 rounded-md shadow-sm">
                        0.32
                    </p>
                    <p className="inline-flex items-center justify-center p-2 text-4xl leading-6 text-gray-700 border border-gray-300 rounded-md shadow-sm">
                        0.83
                    </p>
                </div>
            </div>
            <hr className="border-t border-gray-500 my-8"/>

            <h2 className="text-center text-2xl font-semibold text-gray-900 my-6">Features</h2>
            <div className="flex flex-col lg:flex-row gap-6">
                {[{ date: '09/01/22' }, { date: '11/30/23' }].map((table, index) => (
                    <div key={index} className="h-96 overflow-y-auto flex-1">
                        <h5 className="px-4 mb-2 text-xl text-center font-semibold leading-6 text-gray-900">{table.date}</h5>
                        <div className="px-4 mt-2 overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-300">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                            Feature Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                            Score
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                            Importance
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {['eFrailty Score', 'Charlson Comorbidity Score', 'Number of HCCs', 'Dx of Chronic Kidney', 'Dx of Congestive Heart Failure'].map((feature, i) => (
                                        <tr key={i}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                                                <span className="inline-block h-4 w-4 bg-gray-400"></span>
                                                <button onClick={() => setIsOpen(true)}>{feature}</button>
                                                <EFrailtyDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-gray-900 rounded-full">
                                                    0.8
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                22%
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



