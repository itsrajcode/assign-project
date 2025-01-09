import React from "react";
import Header from "./components/Header";
import ResultCard from "./components/ResultCard";
import CompareAccuracy from "./components/CompareAccuracy";

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
      </div>
    </div>
  );
}

export default App;
