import React from 'react';
import { SquareChevronDownIcon } from 'lucide-react';

const CompareAccuracy = () => {
  return (
    <div
      className="p-4 rounded-lg bg-white shadow-sm border border-gray-200"
      style={{ height: '200px', width: '300px' }}
    >
      <div className="flex items-center gap-2 text-gray-500">
        <SquareChevronDownIcon className="w-5 h-5" />
        <span className="text-sm">Compare Accuracy</span>
      </div>
    </div>
  );
};

export default CompareAccuracy;
