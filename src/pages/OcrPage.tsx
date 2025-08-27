import { useNavigate } from 'react-router-dom';
import { 
  DocumentTextIcon, 
  MapPinIcon, 
  CalendarIcon, 
  BuildingOfficeIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';
import { MOCK_OCR_DATA } from '../lib/mockData';
import { cn } from '../lib/utils';

export function OcrPage() {
  const navigate = useNavigate();
  const data = MOCK_OCR_DATA;

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

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">OCR Analysis Results</h1>
        <p className="mt-2 text-gray-600">
          Extracted soil analysis data from your uploaded report.
        </p>
      </div>

      {/* Summary Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center mb-6">
          <DocumentTextIcon className="h-8 w-8 text-primary-600 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Report Summary</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-3">
            <DocumentTextIcon className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-500">File Name</p>
              <p className="text-sm text-gray-900">{data.fileName}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <BuildingOfficeIcon className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-500">Laboratory</p>
              <p className="text-sm text-gray-900">{data.detectedLab}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <CalendarIcon className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-500">Date Collected</p>
              <p className="text-sm text-gray-900">{data.dateCollected}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MapPinIcon className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-500">Location</p>
              <p className="text-sm text-gray-900">{data.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Sample ID</p>
              <p className="text-lg font-semibold text-gray-900">{data.sampleId}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-500">OCR Confidence</p>
              <p className="text-lg font-semibold text-green-600">{data.confidence}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center mb-6">
          <ChartBarIcon className="h-8 w-8 text-primary-600 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Soil Metrics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.metrics.map((metric, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{metric.name}</h3>
                <span
                  className={cn(
                    'px-2 py-1 text-xs font-medium rounded-full',
                    getStatusColor(metric.status)
                  )}
                >
                  {metric.status}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {metric.value} {metric.unit}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Optimal: {metric.range.optimal.min}-{metric.range.optimal.max} {metric.unit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recommended Next Steps
        </h2>
        <ul className="space-y-3">
          {data.nextSteps.map((step, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                {index + 1}
              </span>
              <p className="text-gray-700">{step}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => navigate('/upload')}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Upload Another Report
        </button>
        <button
          onClick={() => navigate('/dashboard')}
          className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Continue to Dashboard
        </button>
      </div>
    </div>
  );
}
