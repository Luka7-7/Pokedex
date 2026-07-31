import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function Contador() {
  const [contador, setcontador] = useState(0)
  return (
    <button onClick={() => setcontador(contador + 1)
    } >
      Clickeado {contador} veces
    </button>
  )
}

export default Contador
