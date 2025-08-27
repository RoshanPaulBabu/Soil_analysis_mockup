import { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  BellIcon, 
  UserCircleIcon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { cn } from '../lib/utils';

export function TopBar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm border-b border-gray-200">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center flex-1">
          <div className="ml-64 flex-1 max-w-lg">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="search"
                placeholder="Search samples, reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-sm placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md">
            <BellIcon className="h-6 w-6" aria-hidden="true" />
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400"></span>
          </button>

          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md">
              <UserCircleIcon className="h-8 w-8" aria-hidden="true" />
              <span className="text-sm font-medium">John Doe</span>
              <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={cn(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={cn(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={cn(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Sign out
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
}
