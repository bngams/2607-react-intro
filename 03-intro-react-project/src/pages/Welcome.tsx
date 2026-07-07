import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import Button from '@mui/material/Button';

function Welcome() {

  // without explicit type, TypeScript will infer the type of count as number
  // const [count, setCount] = useState(0)

  // with explicit type, TypeScript will infer the type of count as number
  const [count, setCount] = useState<number>(0)

  return (
    <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          My Count is {count}
        </button>

        <Button 
          variant="contained"
          onClick={() => setCount((count) => count + 1)}>
          My Count is {count}
        </Button>

    </section>
  )
}
export default Welcome;