import { useState } from 'react'
import reactLogo from './assets/logo.png'
import viteLogo from '/mjahmad.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Quraner Fariwala</h1>
       <h3>Research • Printing • Distribution</h3>
        <h3> of Holy Quran</h3>
      <div className="card">
          <p>Quraner Fariwala is a mission of truth, dignity, and spiritual clarity. Welcome to the legacy.</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
