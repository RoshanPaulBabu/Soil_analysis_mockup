import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MOCK_TREND_DATA } from '../lib/mockData';

export function TrendChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Nutrient Trends Over Time</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={MOCK_TREND_DATA}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              className="text-sm"
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              className="text-sm"
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="nitrogen" 
              stroke="#3b82f6" 
              strokeWidth={2}
              name="Nitrogen (kg/ha)"
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="phosphorus" 
              stroke="#10b981" 
              strokeWidth={2}
              name="Phosphorus (ppm)"
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="potassium" 
              stroke="#f59e0b" 
              strokeWidth={2}
              name="Potassium (ppm)"
              dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="pH" 
              stroke="#ef4444" 
              strokeWidth={2}
              name="pH"
              dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
