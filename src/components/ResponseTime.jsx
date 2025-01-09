import React from 'react';
import { Clock } from 'lucide-react';
import { ArrowUpIcon } from 'lucide-react';

const ResponseTime = ({
  standardTime = "2min",
  percentage = 60,
  actualTime = "2min",
  isSlower = true
}) => {
  return (
    <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-gray-400" />
        <h2 className="text-lg text-gray-400 font-medium">Response Time</h2>
      </div>

      {/* Standard Time Badge */}
      <div className="mb-4">
        <span className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm">
          Std Time - {standardTime}
        </span>
      </div>

      {/* Stats Box */}
      <div className="border border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-semibold text-teal-500">
              {percentage}
            </span>
            <span className="text-gray-500 text-xl font-semibold">%</span>
            <span className="text-gray-500 text-sm">Ans took</span>
          </div>
          <div className="flex items-center gap-1">
            <ArrowUpIcon className={`w-6 h-6 ${isSlower ? 'text-red-500' : 'text-green-500'}`} />
            <span className="text-indigo-600 font-medium">{actualTime}</span>
          </div>
        </div>
      </div>

      {/* Status Message */}
      <p className="text-xl font-medium">
        You are <span className="text-red-500">slow</span>!
      </p>
    </div>
  );
};

export default ResponseTime;