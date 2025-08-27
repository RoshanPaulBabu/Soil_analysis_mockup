import { useState, useMemo } from 'react';
import { 
  ChevronUpDownIcon, 
  ChevronUpIcon, 
  ChevronDownIcon,
  FunnelIcon 
} from '@heroicons/react/24/outline';
import { MOCK_DASHBOARD_SAMPLES } from '../lib/mockData';
import { cn } from '../lib/utils';

type SortField = 'id' | 'region' | 'pH' | 'nitrogen' | 'phosphorus' | 'potassium' | 'status' | 'date';
type SortDirection = 'asc' | 'desc';

export function RecentSamplesTable() {
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [filterRegion, setFilterRegion] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ChevronUpDownIcon className="h-4 w-4" />;
    }
    return sortDirection === 'asc' ? 
      <ChevronUpIcon className="h-4 w-4" /> : 
      <ChevronDownIcon className="h-4 w-4" />;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Low':
        return 'bg-red-100 text-red-800';
      case 'High':
        return 'bg-yellow-100 text-yellow-800';
      case 'Optimal':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAndSortedData = useMemo(() => {
    let filtered = MOCK_DASHBOARD_SAMPLES.filter(sample => {
      const regionMatch = !filterRegion || sample.region.toLowerCase().includes(filterRegion.toLowerCase());
      const statusMatch = !filterStatus || sample.status === filterStatus;
      return regionMatch && statusMatch;
    });

    return filtered.sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = (bValue as string).toLowerCase();
      }

      if (sortDirection === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
  }, [sortField, sortDirection, filterRegion, filterStatus]);

  const uniqueRegions = [...new Set(MOCK_DASHBOARD_SAMPLES.map(s => s.region))];
  const uniqueStatuses = [...new Set(MOCK_DASHBOARD_SAMPLES.map(s => s.status))];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Recent Samples</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FunnelIcon className="h-4 w-4 text-gray-400" />
              <select
                value={filterRegion}
                onChange={(e) => setFilterRegion(e.target.value)}
                className="text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Regions</option>
                {uniqueRegions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Status</option>
                {uniqueStatuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                { key: 'id', label: 'Sample ID' },
                { key: 'region', label: 'Region' },
                { key: 'pH', label: 'pH' },
                { key: 'nitrogen', label: 'N (kg/ha)' },
                { key: 'phosphorus', label: 'P (ppm)' },
                { key: 'potassium', label: 'K (ppm)' },
                { key: 'status', label: 'Status' },
                { key: 'date', label: 'Date' },
              ].map(({ key, label }) => (
                <th
                  key={key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort(key as SortField)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{label}</span>
                    {getSortIcon(key as SortField)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAndSortedData.map((sample) => (
              <tr key={sample.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {sample.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {sample.region}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {sample.pH}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {sample.nitrogen}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {sample.phosphorus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {sample.potassium}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={cn(
                      'px-2 py-1 text-xs font-medium rounded-full',
                      getStatusColor(sample.status)
                    )}
                  >
                    {sample.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {sample.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
