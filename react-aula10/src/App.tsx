import { useRef, useState } from 'react'

export default function App() {
  let variavel = 0 // Resetado a cada novo render do componente
  const [state, setState] = useState(0) //Persiste em memória e renderiza com o novo valor
  const ref = useRef(0) // Persiste em memória, mas só aparece se houver novo render
  const showValues = () => {
      alert(`
          Variable1: ${variavel} 
          Ref: ${ref.current} 
          State: ${state} 
      `);
    };

    return (
        <>
            <div style={{padding: '10rem'}}>
              <div style={{marginBottom: '1rem'}}>
                <p>Variavel: {variavel}</p>
                <p>Ref: {ref.current}</p>
                <p>State: {state}</p>
              </div>
              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <button onClick={() => variavel++}>Aumentar Variavel</button>
                <button onClick={() => ref.current++}>Aumentar Ref</button>
                <button onClick={() => setState(state => state + 1)}>Aumentar State</button>
              </div>
              <button onClick={showValues}>Exibir valopes</button>
            </div>
        </>
    );
}