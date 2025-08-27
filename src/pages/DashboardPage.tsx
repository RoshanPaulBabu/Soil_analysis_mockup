import { 
  BeakerIcon, 
  ChartBarIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon 
} from '@heroicons/react/24/outline';
import { KpiCard } from '../components/KpiCard';
import { TrendChart } from '../components/TrendChart';
import { SoilQualityRadar } from '../components/SoilQualityRadar';
import { RecentSamplesTable } from '../components/RecentSamplesTable';
import { SarDisplacementMap } from '../components/SarDisplacementMap';
import { MOCK_KPI_DATA } from '../lib/mockData';

export function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Soil Analysis Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Monitor soil health metrics, trends, and analysis results across your regions.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title="Average pH"
          value={MOCK_KPI_DATA.averagePh}
          icon={BeakerIcon}
          color="blue"
          trend={{ direction: 'up', value: '+0.2 vs last month' }}
        />
        <KpiCard
          title="Organic Carbon"
          value={MOCK_KPI_DATA.organicCarbon}
          unit="%"
          icon={ChartBarIcon}
          color="green"
          trend={{ direction: 'down', value: '-0.1% vs last month' }}
        />
        <KpiCard
          title="Optimal Samples"
          value={MOCK_KPI_DATA.optimalSamples}
          unit="%"
          icon={CheckCircleIcon}
          color="green"
          trend={{ direction: 'up', value: '+5% vs last month' }}
        />
        <KpiCard
          title="Active Alerts"
          value={MOCK_KPI_DATA.alerts}
          icon={ExclamationTriangleIcon}
          color="yellow"
          trend={{ direction: 'down', value: '-2 vs last month' }}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendChart />
        <SoilQualityRadar />
      </div>

      {/* SAR Displacement Map */}
      <SarDisplacementMap />

      {/* Recent Samples Table */}
      <RecentSamplesTable />
    </div>
  );
}
