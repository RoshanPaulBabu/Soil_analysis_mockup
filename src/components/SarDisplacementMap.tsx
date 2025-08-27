import { useState } from 'react';
import { MapIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export function SarDisplacementMap() {
  const [layerVisible, setLayerVisible] = useState(true);
  const [opacity, setOpacity] = useState(75);
  const [hoveredPoint, setHoveredPoint] = useState<{ x: number; y: number; value: string } | null>(null);

  const mockPoints = [
    { x: 25, y: 30, displacement: '-2.3 mm' },
    { x: 45, y: 45, displacement: '+1.7 mm' },
    { x: 65, y: 25, displacement: '-0.8 mm' },
    { x: 35, y: 65, displacement: '+3.2 mm' },
    { x: 75, y: 60, displacement: '-1.5 mm' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MapIcon className="h-5 w-5 text-primary-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">SAR Displacement Map</h3>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLayerVisible(!layerVisible)}
              className="flex items-center space-x-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              {layerVisible ? (
                <EyeIcon className="h-4 w-4" />
              ) : (
                <EyeSlashIcon className="h-4 w-4" />
              )}
              <span className="text-sm">{layerVisible ? 'Hide' : 'Show'} Layer</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Layer Opacity: {opacity}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="relative bg-gray-100 rounded-lg h-96 overflow-hidden">
          {/* Base Map */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200">
            <div className="absolute inset-0">
              {/* Grid pattern for base map */}
              <svg className="w-full h-full opacity-20">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>

          {/* Displacement Overlay */}
          {layerVisible && (
            <div 
              className="absolute inset-0"
              style={{ opacity: opacity / 100 }}
            >
              {/* Gradient overlay simulating displacement */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-yellow-300 to-blue-400 opacity-60">
              </div>
              
              {/* Mock data points */}
              {mockPoints.map((point, index) => (
                <div
                  key={index}
                  className="absolute w-3 h-3 bg-white border-2 border-gray-800 rounded-full cursor-pointer transform -translate-x-1.5 -translate-y-1.5 hover:scale-150 transition-transform"
                  style={{ 
                    left: `${point.x}%`, 
                    top: `${point.y}%` 
                  }}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoveredPoint({
                      x: rect.left + rect.width / 2,
                      y: rect.top,
                      value: point.displacement
                    });
                  }}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
              ))}
            </div>
          )}

          {/* Scale/Legend */}
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-lg p-3 shadow-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Displacement Scale</h4>
            <div className="flex items-center space-x-2">
              <div className="w-16 h-3 bg-gradient-to-r from-red-400 via-yellow-300 to-blue-400 rounded"></div>
              <div className="text-xs text-gray-600">
                <div>-5mm</div>
                <div>+5mm</div>
              </div>
            </div>
          </div>

          {/* Tooltip */}
          {hoveredPoint && (
            <div
              className="fixed z-50 bg-gray-900 text-white px-2 py-1 rounded text-sm pointer-events-none"
              style={{
                left: hoveredPoint.x,
                top: hoveredPoint.y - 30,
                transform: 'translateX(-50%)'
              }}
            >
              {hoveredPoint.value}
            </div>
          )}
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p>
            Synthetic Aperture Radar (SAR) displacement data showing ground movement patterns.
            Red areas indicate subsidence, blue areas indicate uplift.
          </p>
        </div>
      </div>
    </div>
  );
}
