'use client';
import React from 'react';

const EFrailtyModal: React.FC = () => {
  const score = 0.5; // Directly set score to 0.5

  return (
    <div className="absolute z-10 bg-white rounded-lg shadow-xl p-4"
         onMouseEnter={(e: React.MouseEvent) => e.stopPropagation()} // Specify the type of event
         onMouseLeave={(e: React.MouseEvent) => e.stopPropagation()}>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        eFrailty Score - Score: <span className='text-red-500'>0.5</span>
      </h3>
      <div className="mt-2">
        {/* Details and Table */}
        <table className="min-w-0 divide-y divide-[#990000]">
                <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                            Feature Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                            Score
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                            Importance
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gray divide-y divide-gray-500">
                    {/* Feature rows */}
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                        <span className="inline-block h-4 w-4 bg-[#ff0000]"></span>
                            eGFR
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-[#ff0000] rounded-full">
                            60
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            40
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                        <span className="inline-block h-4 w-4 bg-[#c70000]"></span>
                            hypertension(%)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-[#c70000] rounded-full">
                            80
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            21
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                        <span className="inline-block h-4 w-4 bg-[#ffc100]"></span>
                            smoking status (%)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-[#ffc100] rounded-full">
                            30
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            11
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                        <span className="inline-block h-4 w-4 bg-green-500"></span>
                            albumin(32 or 45 g/L)(%)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-500 rounded-full">
                            10
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            4
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                        <span className="inline-block h-4 w-4 bg-[#960000]"></span>
                            Congestive Heart Failure (%)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-[#960000] rounded-full">
                            75
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            3
                        </td>
                    </tr>
                </tbody>
            </table>
      </div>
    </div>
  );
};

export default EFrailtyModal;

