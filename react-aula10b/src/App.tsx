import { useRef } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  function handleClick(){
    if(inputRef.current){
      inputRef.current.focus()
    }
    
  }

  return (
    <>
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Focar</button>
        </div>
    </>
  )
}

export default App
