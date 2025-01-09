import React from 'react';
import { Sparkles } from 'lucide-react';

const Suggestions = ({
  suggestions = [
    { range: 'Q. 1-12', time: '40sec', difficulty: 'Easy', color: 'text-teal-500' },
    { range: 'Q. 12-32', time: '1.5min', difficulty: 'Medium', color: 'text-yellow-500' },
    { range: 'Q. 32-40', time: '3min', difficulty: 'Hard', color: 'text-red-500' }
  ]
}) => {
  return (
    <div className="p-2 rounded-lg bg-white shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-gray-400" />
        <h2 className="text-lg text-gray-400 font-semibold">Suggestions</h2>
      </div>

      {/* Suggestions Grid */}
      <div className="flex justify-between gap-2">
        {suggestions.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Question Range */}
            <span className="bg-indigo-600 text-white px-2 py-1 rounded-md text-sm mb-2">
              {item.range}
            </span>
            
            {/* Time */}
            <div className="border border-dashed border-gray-400 rounded-lg mb-2 px-4 w-16 h-16 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-800">
                {item.time}
              </span>
            </div>

            {/* Difficulty */}
            <span className={`font-medium ${item.color}`}>
              {item.difficulty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;