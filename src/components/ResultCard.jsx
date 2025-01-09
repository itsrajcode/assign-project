import React from 'react';

const ResultCard = () => {
  return (
    <div className="max-w-md bg-gray-100 rounded-xl shadow-sm p-6 space-y-6 border border-black">
      <div className="text-center space-y-2 border border-black">
        <div className="flex justify-center">
          <img src="./public/result.jpg" alt="Results illustration" className="w-50 h-40" />
        </div>
        <h2 className="text-indigo-600 text-2xl font-semibold">Your Result!</h2>
        <p className="text-gray-500 text-sm">All your insights & details in one place</p>
      </div>

      {/* Score Section */}
      <div className="bg-gray-50 rounded-lg p-4 border border-black">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-100 rounded">
              <svg 
                className="w-6 h-6 text-indigo-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm text-indigo-600 font-medium">YOU'VE PASSED!</div>
              <div className="text-2xl font-bold">
                136<span className="text-gray-400 text-lg">/240</span>
              </div>
            </div>
          </div>
          <div className="bg-cyan-50 text-cyan-600 px-3 py-1 rounded text-sm">
            76% ACCURACY
          </div>
        </div>
      </div>

      {/* Top Score Section */}
      <div className="space-y-2 border border-black">
        <div className="flex items-center space-x-3">
          <img src="/api/placeholder/40/40" alt="Top scorer avatar" className="w-10 h-10 rounded-full" />
          <div>
            <div className="text-sm text-gray-500">Top Score</div>
            <div className="text-xl font-bold">
              230<span className="text-gray-400 text-sm">/240</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-600">By Parth Akotkar</span>
          <span className="bg-cyan-50 text-cyan-600 px-2 py-1 rounded text-xs">
            92% ACCURACY
          </span>
        </div>
      </div>

      {/* Practice Button */}
      <div className="space-y-4 border border-black">
        <div>
          <h3 className="font-medium">Improve your Marks</h3>
          <p className="text-sm text-gray-500">Improve your score by practicing more.</p>
        </div>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
          Practice more
        </button>
      </div>

      {/* Revisit Paper Section */}
      <div className="pt-4 border-t space-y-4 border border-black">
        <div>
          <h3 className="text-lg font-medium">Revisit Paper</h3>
          <p className="text-sm text-gray-500">
            Challenge your friends by simply sharing a link to this test
          </p>
        </div>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
          <svg 
            className="w-5 h-5" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
          Visit
        </button>
        <p className="text-xs text-gray-400 italic">
          Instructions for how to upload your handwritten material is given
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
