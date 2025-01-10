import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { BarChart2 } from 'lucide-react';

const AccuracyComparisonChart = ({ 
  accuracyData = [
    { slot: 1, accuracy: 85 },
    { slot: 2, accuracy: 42 },
    { slot: 3, accuracy: 35 },
    { slot: 4, accuracy: 60 },
    { slot: 5, accuracy: 53 },
    { slot: 6, accuracy: 45 },
    { slot: 7, accuracy: 62 }
  ],
  timeMarkers = [
    { time: '10min', active: false },
    { time: '15min', active: true },
    { time: '30min', active: false },
    { time: '45min', active: false }
  ]
}) => {
  return (
    <div className="p-6 rounded-lg bg-white shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <BarChart2 className="w-5 h-5 text-gray-500" />
        <h2 className="text-lg text-gray-500">Compare Accuracy</h2>
      </div>

      <div className="relative mb-8 px-4">
        <div className="h-1 bg-teal-100 rounded">
          <div className="absolute top-1/2 w-full -translate-y-1/2 flex justify-between">
            {timeMarkers.map((marker, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center relative`}
              >
                <div 
                  className={`w-6 h-6 rounded-lg ${marker.active ? 'bg-teal-500' : 'bg-gray-200'} 
                    flex items-center justify-center -mt-3`}
                >
                  <span className="text-xs text-white font-medium">
                    {marker.time.replace('min', '')}
                  </span>
                </div>
                <span className="text-xs text-gray-500 mt-1">MIN</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BarChart
        width={500}
        height={300}
        data={accuracyData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid 
          strokeDasharray="3 3" 
          vertical={false}
          stroke="#E5E7EB"
        />
        <XAxis 
          dataKey="slot" 
          label={{ value: 'Slots', position: 'bottom' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          label={{ 
            value: 'Accuracy', 
            angle: -90, 
            position: 'insideLeft',
          }}
          ticks={[0, 25, 50, 75, 100]}
          domain={[0, 100]}
          axisLine={false}
          tickLine={false}
        />
        <Bar 
          dataKey="accuracy" 
          fill="#818CF8"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default AccuracyComparisonChart;