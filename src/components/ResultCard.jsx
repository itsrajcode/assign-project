import { CircleEllipsisIcon } from "lucide-react";
import { FileInputIcon } from "lucide-react";
import React from "react";

const ResultCard = () => {
  return (
    <div className="max-w-md w-full mx-auto bg-gray-100 rounded-xl shadow-sm p-4 sm:p-6 space-y-4 sm:space-y-6 border border-gray-200">
      <div className="text-center space-y-2">
        <div className="flex justify-center">
          <img
            src="./public/result.jpg"
            alt="Results illustration"
            className="w-32 sm:w-50 h-28 sm:h-40 object-contain"
          />
        </div>
        <h2 className="text-indigo-600 text-xl sm:text-2xl font-semibold">Your Result!</h2>
        <p className="text-gray-500 text-xs sm:text-sm">
          All your insights & details in one place
        </p>
      </div>

      <div className="bg-white border border-gray-200 p-3 sm:p-4 rounded-lg">
        <div className="bg-gray-100 p-2 sm:p-3 rounded-lg mb-3">
          <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="p-1.5 sm:p-2 bg-indigo-100 rounded">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600"
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
                <div className="text-xs bg-indigo-600 text-white px-2 py-0.5 sm:py-1 rounded-xl">
                  YOU'VE PASSED
                </div>
                <div className="text-xl sm:text-2xl font-bold">
                  136<span className="text-gray-400 text-xs sm:text-sm">/240</span>
                </div>
              </div>
            </div>
            <div className="px-2 sm:px-3 py-1 rounded text-sm border-l border-gray-200 grid place-content-center place-items-center">
              <span className="text-white bg-cyan-600 px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
                76%
              </span>
              <span className="text-cyan-600 text-xs sm:text-sm">ACCURACY</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-2 sm:p-3 rounded-lg mb-3">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="./public/profile.jpeg"
              alt="Top scorer avatar"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg"
            />
            <div>
              <div className="text-xs sm:text-sm text-gray-500">Top Score</div>
              <div className="text-xl sm:text-2xl font-bold">
                230<span className="text-gray-400 text-xs sm:text-sm">/240</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm border-t border-gray-200 pt-2">
            <div>
              <span className="text-gray-600">By</span>
              <span className="font-semibold"> Parth Akotkar</span>
            </div>
            <span className="text-cyan-50 bg-cyan-600 px-2 py-0.5 sm:py-1 rounded">
              92% ACCURACY
            </span>
          </div>
        </div>

        <div>
          <div>
            <h3 className="font-bold text-sm sm:text-base">Improve your Marks</h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Improve your score by practicing more.
            </p>
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 mt-3 text-sm sm:text-base font-bold rounded-lg hover:bg-indigo-700 transition-colors">
            Practice more
          </button>
        </div>
      </div>

      <div className="p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
        <div>
          <h3 className="text-lg sm:text-xl font-bold">Revisit Paper</h3>
          <p className="text-sm sm:text-base text-gray-500 mt-2 mb-2">
            Challenge your friends by simply sharing a link to this test
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-indigo-600 text-white py-2 px-8 sm:px-10 rounded-lg text-sm sm:text-base font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center">
            <FileInputIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Visit
          </button>
        </div>
        <p className="text-xs sm:text-sm text-gray-400 italic flex mt-2">
          <CircleEllipsisIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-2 mt-0.5" />
          <span>Instructions for how to upload your handwritten material is given</span>
        </p>
      </div>
    </div>
  );
};

export default ResultCard;