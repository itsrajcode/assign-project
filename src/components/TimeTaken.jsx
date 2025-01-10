import React from "react";
import { Clock } from "lucide-react";

const SecondsScale = ({
  redLineEnd = 60,
  greenLineEnd = 30,
  markerPosition = 30,
  description = "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum",
}) => {
  return (
    <div className="mb-8">
      <div className="relative h-20 bg-indigo-50 rounded-lg mb-2">
        <div className="absolute w-full h-full flex justify-between px-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="flex flex-col items-center relative">
              <div className="h-3 w-0.5 bg-indigo-400"></div>
              <span className="text-xs text-gray-700 mt-1">{(i + 1) * 10}</span>
            </div>
          ))}
        </div>

        <div
          className="absolute h-2 bg-red-500 rounded-full top-8"
          style={{
            left: "4%",
            width: `${(redLineEnd / 90) * 92}%`,
          }}
        ></div>

        <div
          className="absolute h-2 bg-green-500 rounded-full top-12"
          style={{
            left: "4%",
            width: `${(greenLineEnd / 90) * 92}%`,
          }}
        ></div>

        <div
          className="absolute w-2 h-full bg-indigo-400"
          style={{ left: `${(markerPosition / 90) * 100}%` }}
        ></div>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const PlusMinusScale = ({
  redLineStart = 0,
  redLineEnd = 3,
  greenLineStart = -2,
  greenLineEnd = 0,
  markerPosition = 0,
  description = "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum",
}) => {
  return (
    <div className="mb-4">
      <div className="relative h-12 bg-indigo-50 rounded-lg mb-2">
        <div className="absolute w-full h-full flex justify-between px-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="flex flex-col items-center relative">
              <div className="h-3 w-0.5 bg-indigo-400"></div>
              <span className="text-xs text-gray-500 mt-1">{4 - i}</span>
            </div>
          ))}
        </div>

        <div
          className="absolute h-2 bg-green-500 rounded-full top-8"
          style={{
              left: `${((4 - greenLineEnd) / 8) * 100}%`,
              width: `${((greenLineEnd - greenLineStart) / 8) * 100}%`,
            }}
        ></div>

        <div
          className="absolute h-2 bg-red-500 rounded-full top-8"
          style={{
            left: `${((4 - redLineEnd) / 8) * 100}%`,
            width: `${((redLineEnd - redLineStart) / 8) * 100}%`,
          }}
        ></div>

        <div
          className="absolute w-2 h-full bg-indigo-400"
          style={{ left: `${((4 - markerPosition) / 8) * 100}%` }}
        ></div>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const TimeTaken = () => {
  return (
    <div className="p-6 rounded-lg bg-white shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-gray-400" />
        <h2 className="text-lg text-gray-400 font-medium">Time Taken</h2>
      </div>

      <SecondsScale />
      <PlusMinusScale />
    </div>
  );
};

export default TimeTaken;
