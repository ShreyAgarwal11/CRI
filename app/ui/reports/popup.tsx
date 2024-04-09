import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface EFrailtyDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const EFrailtyDialog: React.FC<EFrailtyDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0" onClose={onClose}>
        <div className="flex items-center justify-center min-h-full">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative bg-white rounded-lg w-full max-w-lg p-3">
              <div className="mt-3 text-center sm:mt-5">
                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                  eFrailty Score 0.5
                </Dialog.Title>
                              <div className="mx-auto">
                                  <table className="divide-y divide-[#990000] mx-auto">
                                      <thead>
                                          <tr>
                                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#231F20] uppercase tracking-wider">
                                                  Feature Name
                                              </th>
                                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#231F20] uppercase tracking-wider">
                                                  Score
                                              </th>
                                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#231F20] uppercase tracking-wider">
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
                                                  albumin ({'<'}32 or {'>'}45 g/L) (%)
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
                                                  congestive heart failure (%)
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
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-[#990000] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#FFCC00] hover:text-[#231F20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={onClose}
                >
                    Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default EFrailtyDialog;



