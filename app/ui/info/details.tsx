export default function PatientInfo() {
  return (
    <div>
      <div className="px-4 py-2 sm:px-5 bg-[#990000] shadow rounded-lg">
    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
            <span className="text-xs sm:text-sm font-medium text-white">Patient Name:</span>
            <p className="text-lg font-semibold text-white">John Doe</p>
        </div>
        <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-white">DOB:</span>
            <p className="text-lg font-semibold text-white">01/01/1970</p>
        </div>
        <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-white">MRN:</span>
            <p className="text-lg font-semibold text-white">123456789</p>
        </div>
    </div>
</div>
<div className="mt-6">
    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <h4 className="text-4xl font-semibold leading-6 text-gray-900">Risk of 90-Day Mortality</h4>
        <div className="flex items-center">
            <p className="inline-flex items-center justify-center p-2 text-4xl leading-6 text-gray-700 bg-gray-50 border border-[#990000] rounded-md shadow-sm">
                0.83
            </p>
        </div>
    </div>
</div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 md:divide-x md:divide-gray-200">
      <div className="h-96 overflow-y-auto">
    <h5 className="px-4 mb-2 text-xl text-center font-semibold leading-6 text-gray-900">Features</h5>
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

<div className="min-w-0 lg:pl-4">
    <div className="h-96 overflow-y-auto">
        <h5 className="mb-4 text-xl sm:text-lg font-semibold text-gray-900 text-center">Recommendations</h5>
        <div className="border-t border-gray-100">
            <p className='px-4 mt-4 mb-2 font-medium text-gray-900'>Goals of Care Discussion</p>
            <ul role="list" className="pl-4">
                <li className="py-2 text-sm leading-6 text-gray-700">
                    <span className="font-medium">Add CPT Code:</span>
                    <ul className="list-disc pl-8">
                        <li className="py-1 text-sm leading-6 text-gray-700">99497 for the first 30 minutes</li>
                        <li className="py-1 text-sm leading-6 text-gray-700">99498 (add-on) for each additional 30 minutes</li>
                    </ul>
                </li>
            </ul>
            <p className='px-4 mt-4 font-medium text-gray-900'>Consult Palliative Care</p>
        </div>
    </div>
</div>

      </div>
    </div>
  );
}
