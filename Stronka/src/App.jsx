import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Zegar from './Zegar.jsx'
import Navbar from './Navbar'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
        <Home />
       
      </div>
      <Navbar />
      <h1>Mateusz Freus</h1>
      <h2>Album 97665</h2>
      <Zegar />
      
      
      <div className="card">
      
        <button onClick={() => setCount((count) => count + 1)}>
          Poklikaj sobie : {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          margin: '20px',
          padding: '70px 100px',
          borderRadius: '10px',
          backgroundColor: 'white',
          color: 'darkgrey',
          textDecoration: 'none',
          fontSize: '3em'
        }}
      >
        Poproszę o przyciśnięcie
      </a>
    </>
  )
}

export default App
