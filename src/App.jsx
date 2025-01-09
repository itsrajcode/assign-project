import React from 'react'
import Header from './components/Header'
import ResultCard from './components/ResultCard'

function App() {
  return (
    <div>
      <Header />
      <div className='p-5'>
        <ResultCard />
      </div>
    </div>
  )
}

export default App