import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  DocumentArrowUpIcon, 
  DocumentTextIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline';
import { cn } from '../lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Upload Report', href: '/upload', icon: DocumentArrowUpIcon },
  { name: 'OCR Details', href: '/ocr', icon: DocumentTextIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
];

export function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">SoilAnalyzer</h1>
      </div>
      
      <nav className="mt-8 px-3">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    isActive
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  )
                }
              >
                <item.icon
                  className="mr-3 h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
