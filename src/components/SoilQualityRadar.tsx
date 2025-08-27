import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { MOCK_RADAR_DATA } from '../lib/mockData';

export function SoilQualityRadar() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Soil Quality Radar</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={MOCK_RADAR_DATA}>
            <PolarGrid className="opacity-30" />
            <PolarAngleAxis 
              dataKey="subject" 
              className="text-sm"
              tick={{ fontSize: 12 }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 'dataMax']}
              className="text-xs"
              tick={{ fontSize: 10 }}
            />
            <Radar
              name="Current Values"
              dataKey="A"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Radar
              name="Optimal Range"
              dataKey="B"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.1}
              strokeWidth={2}
              strokeDasharray="5 5"
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Compare current soil metrics against optimal ranges for your region.</p>
      </div>
    </div>
  );
}
