import { useState } from 'react'
import ResumeAnalyzer from './components/ResumeAnalyzer';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResumeAnalyzer />
    </>
  )
}

export default App
