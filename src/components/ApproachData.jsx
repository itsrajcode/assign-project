import React from 'react';
import { TrendingUp } from 'lucide-react';

const ApproachData = ({
  approaches = [
    { label: 'Based on', percentage: 25, label1: 'Facts' },
    { label: 'Based on', percentage: 32, label1: 'Analysis' },
    { label: 'Based on', percentage: 19, label1: 'Elimination' },
    { label: 'Based on', percentage: 24, label1: 'Guess' }
  ]
}) => {
  return (
    <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
      <div className="flex items-center mb-1 gap-2">
        <TrendingUp className="w-5 h-5 text-gray-400" />
        <h2 className="text-lg text-gray-400 font-medium">Approach Data</h2>
      </div>

      <div className="flex flex-col gap-3">
        {approaches.map((approach, index) => (
          <div 
            key={index}
            className="p-2 rounded-sm border border-indigo-100"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-indigo-600">
                {approach.percentage}%
              </span>
              <span className="text-gray-700 font-semibold">
                {approach.label}
                <span className='text-indigo-600'> {approach.label1}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproachData;