import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="design-container">
      <div className="diamond">
        <div className="text">
          <span>HTML</span> <span className='andsymbol'>&</span> <span>CSS</span>
        </div>
        <p className="subtext">design and build websites</p>
      </div>
      <p className='author'>JON DUCKETT</p>
    </div>
  )
}

export default App
