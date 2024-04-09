'use client';
import { useState } from "react";
import EFrailtyDialog from "./popup";

export default function Features() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <div className="mt-6 grid grid-cols-2 gap-x-8">
        <div className="flex flex-col items-center justify-center gap-5">
            <h4 className="text-4xl font-semibold leading-6 text-gray-900">Risk of 90-Day Mortality</h4>
            <div className="flex items-center">
                <p className="inline-flex items-center justify-center p-2 text-4xl leading-6 text-gray-700 border border-[#231F20] rounded-md shadow-sm">
                    0.32
                </p>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
            <h4 className="text-xl font-semibold leading-6 text-gray-900">Average risk of 90-Day Mortality: 0.23</h4>
            <div className="flex items-center">
                <p className="inline-flex items-center justify-center p-2 text-4xl leading-6 text-gray-700 border border-[#990000] border-dashed rounded-md shadow-sm">
                    0.83
                </p>
            </div>
        </div>
        </div>
        <hr className="border-t border-gray-500 my-8"/>


        <div>
            <h2 className="text-center text-2xl font-semibold text-gray-900 my-6">Features</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 md:divide-x md:divide-gray-200">
            <div className="h-96 overflow-y-auto">
        <h5 className="px-4 mb-2 text-xl text-center font-semibold leading-6 text-gray-900">09/01/22</h5>
        <div className="px-4 mt-2 overflow-x-auto">
            <table className="min-w-0 divide-y divide-[#990000]">
                <thead className="bg-[#990000]">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Feature Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Score
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Importance
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gray divide-y divide-gray-500">
                    {/* Feature rows */}
                    <tr>
                    <td className="relative px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                            <span className="inline-block h-4 w-4 bg-[#ff0000]"></span>
                            <button onClick={() => setIsOpen(true)}>eFrailty Score</button>
                            <EFrailtyDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-[#ff0000] rounded-full">
                            0.8
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            22%
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                        <span className="inline-block h-4 w-4 bg-[#c70000]"></span>
                            Charlson Comorbidity Score
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-[#c70000] rounded-full">
                            5
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            10%
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                        <span className="inline-block h-4 w-4 bg-[#ffc100]"></span>
                            Number of HCCs
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-[#ffc100] rounded-full">
                            4
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            9%
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                        <span className="inline-block h-4 w-4 bg-green-500"></span>
                            Dx of Chronic Kidney Disease
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-500 rounded-full">
                            N
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            6%
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                        <span className="inline-block h-4 w-4 bg-[#960000]"></span>
                            Dx of Congestive Heart Failure
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-[#960000] rounded-full">
                            Y
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            4%
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="h-96 overflow-y-auto">
        <h5 className="px-4 mb-2 text-xl text-center font-semibold leading-6 text-gray-900">11/30/23</h5>
        <div className="px-4 mt-2 overflow-x-auto">
            <table className="min-w-0 divide-y divide-[#990000]">
                <thead className="bg-[#990000]">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Feature Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Score
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Importance
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gray divide-y divide-gray-500">
                    {/* Feature rows */}
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                        <span className="inline-block h-4 w-4 bg-[#ff0000]"></span>
                            eFrailty Score
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-[#ff0000] rounded-full">
                            0.8
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            22%
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                        <span className="inline-block h-4 w-4 bg-[#c70000]"></span>
                            Charlson Comorbidity Score
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-[#c70000] rounded-full">
                            5
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            10%
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                        <span className="inline-block h-4 w-4 bg-[#ffc100]"></span>
                            Number of HCCs
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-[#ffc100] rounded-full">
                            4
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            9%
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                        <span className="inline-block h-4 w-4 bg-green-500"></span>
                            Dx of Chronic Kidney Disease
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-500 rounded-full">
                            N
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            6%
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                        <span className="inline-block h-4 w-4 bg-[#960000]"></span>
                            Dx of Congestive Heart Failure
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-[#960000] rounded-full">
                            Y
                        </span>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            4%
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    
            </div>
        </div>
      </div>
    );
  }