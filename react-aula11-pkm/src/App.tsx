import { useEffect, useState } from 'react'

async function getPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const data = await response.json()
  return data.results
}

interface IPokemon{
  name: string
  url: string
}

export default function App() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([] )

  useEffect(()=>{
    getPokemons().then((data)=> {
      console.log(data)
      setPokemons(data)
    })
  }, [])



  return (
    <>
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center'}}>
        <h1>Pokemon List</h1>
        <ul>
          {pokemons.map((pokemon) =>(<li key={pokemon.name}>{pokemon.name}</li>))}
        </ul>
      </div>
    </>
  )
}


