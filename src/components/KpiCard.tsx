interface KpiCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: {
    direction: 'up' | 'down' | 'neutral';
    value: string;
  };
  icon: React.ComponentType<{ className?: string }>;
  color?: 'blue' | 'green' | 'yellow' | 'red';
}

export function KpiCard({ title, value, unit, trend, icon: Icon, color = 'blue' }: KpiCardProps) {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
  };

  const trendColorClasses = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <div className="flex items-baseline mt-2">
            <p className="text-2xl font-semibold text-gray-900">
              {value}
              {unit && <span className="text-lg text-gray-500 ml-1">{unit}</span>}
            </p>
          </div>
          {trend && (
            <div className="mt-2">
              <span className={`text-sm ${trendColorClasses[trend.direction]}`}>
                {trend.direction === 'up' ? '↗' : trend.direction === 'down' ? '↘' : '→'} {trend.value}
              </span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
}
