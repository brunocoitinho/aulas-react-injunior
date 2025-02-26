import { useState } from 'react'
import CounterButton from './components/CounterButton/CounterButton'

export default function App() {
  const [showButton, setshowButton] = useState<boolean>(false)

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

        <label htmlFor="check" style={{fontSize: "1.5rem", marginTop: "1.5rem"}}>Mostrar Botão</label>

        <input 
        id="check"
        type="checkbox"
        checked={showButton}
        onChange={()=> setshowButton((showButton) =>!showButton)}
        style={{marginLeft: '8px'}} />

        {showButton && <CounterButton />}

      </div>
    </>
  )
}

