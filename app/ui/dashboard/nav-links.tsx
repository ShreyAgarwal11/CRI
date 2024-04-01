'use client';
import {
  ChartBarIcon,
  TableCellsIcon,
  IdentificationIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: 'Patient Info',
    href: '/dashboard/info',
    icon: IdentificationIcon,
  },
  {
    name: 'Patient Report',
    href: '/dashboard/reports',
    icon: ChartBarIcon,
  },
  {
    name: 'Data',
    href: '/dashboard/data',
    icon: TableCellsIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        // Applying conditional styling more granularly to ensure both text and icon respond correctly
        const textStyle = clsx(
          'hidden md:block',
          {
            'text-[#231F20]': isActive, // Active state
            'text-white': !isActive, // Default state
          },
          'group-hover:text-[#231F20]' // Hover state for the text
        );

        const iconStyle = clsx(
          'w-6 h-6',
          {
            'text-[#231F20]': isActive, // Active state
            'text-white': !isActive, // Default state
          },
          'group-hover:text-[#231F20]' // Hover state for the icon
        );

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3',
              isActive ? 'bg-[#FFCC00]' : 'bg-[#990000]',
              'hover:bg-[#FFCC00] group' // Added 'group' class to handle hover state for children
            )}
          >
            <LinkIcon className={iconStyle} aria-hidden="true" />
            <span className={textStyle}>
              {link.name}
            </span>
          </Link>
        );
      })}
    </>
  );
}

