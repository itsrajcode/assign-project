import React from "react";
import Header from "./components/Header";
import ResultCard from "./components/ResultCard";
import CompareAccuracy from "./components/CompareAccuracy";
import SubjectImprovements from "./components/Improvements";

function App() {
  return (
    <div>
      <Header />
      <div className="p-5 flex">
        <ResultCard />
        <div className="flex flex-row gap-4">
          <CompareAccuracy />
          <CompareAccuracy />
          <CompareAccuracy />
        </div>
        <div className="flex flex-row gap-4">
          <SubjectImprovements />
          <SubjectImprovements />
          <SubjectImprovements/>
          <SubjectImprovements/>
        </div>
        <div className="flex flex-row gap-4">
          <SubjectImprovements />
          <SubjectImprovements />
          <SubjectImprovements/>
          <SubjectImprovements/>
        </div>
      </div>
    </div>
  );
}

export default App;
