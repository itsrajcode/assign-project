import React from "react";
import Header from "./components/Header";
import ResultCard from "./components/ResultCard";
import CompareAccuracy from "./components/CompareAccuracy";
import SubjectImprovements from "./components/Improvements";
import AccuracyComparisonChart from "./components/AccuracyComparisonChart";
import ResponseTime from "./components/ResponseTime";
import ApproachData from "./components/ApproachData";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-4 md:p-6 max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Result Card */}
          <div className="lg:w-1/4">
            <ResultCard />
          </div>

          {/* Right Side - Other Components */}
          <div className="lg:w-3/4 flex flex-col gap-6">
            {/* Compare Accuracy Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <CompareAccuracy />
              <CompareAccuracy />
              <CompareAccuracy />
            </div>

            {/* Subject Improvements Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <SubjectImprovements />
              <ResponseTime />
              <ApproachData />
              <SubjectImprovements />
            </div>

            {/* Accuracy Comparison Charts Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <AccuracyComparisonChart />
              <AccuracyComparisonChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;