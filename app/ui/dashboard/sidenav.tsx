// components/Navbar.tsx
'use client';
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, PlusIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Modal from './Modal';

interface MenuItem {
  id: number;
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: 1, label: 'Analysis 1', href: 'analysis1' }
  ]);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleAddMenuItem = () => {
    const nextId = menuItems.length + 1;
    const nextLabel = `Analysis ${nextId}`;
    const nextHref = `analysis${nextId}`;
    setMenuItems([...menuItems, { id: nextId, label: nextLabel, href: nextHref }]);
    setShowPopup(false);
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-col items-center">
                  <span className="text-[#231F20] text-xl font-bold font-georgia">
                    Keck Medicine of <span className="text-[#990000]">USC</span>
                  </span>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.id}
                        href={`/${item.href}`}
                        className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-[#990000] text-sm font-medium"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" className="inline-flex items-center p-1 rounded-full text-[#231F20] hover:bg-[#990000] hover:text-white focus:outline-none ring-2 ring-offset-2 ring-[#990000]" onClick={() => setShowPopup(true)}>
                  <span className="ml-2">Add new item</span>
                  <PlusIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" className="p-1 rounded-full text-[#231F20] hover:bg-[#990000] hover:text-white focus:outline-none ring-2 ring-offset-2 ring-[#990000]">
                  <UserIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Disclosure Panel for Mobile */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Disclosure.Button
                  key={item.id}
                  as={Link}
                  href={`/${item.href}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 bg-gray-50"
                >
                  {item.label}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>

          <Modal isOpen={showPopup} onClose={() => setShowPopup(false)} onConfirm={handleAddMenuItem} />
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;





