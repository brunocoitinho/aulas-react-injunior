import { useEffect, useState } from "react"


export default function useCounter(){
    const [counter, setCounter] = useState<number>(0)
    useEffect(() => {
        console.log('Função executada') 
    },[counter]) // Executa uma vez no inicio e todas as vezes que o que estiver na array mudar
    // Se o array estiver vazio executa só 1 vez no inicio
    // Se não for passado nenhum array executa toda vez que o componente for renderizado
    
        function increment(){
            setCounter((currentState => currentState + 1))
            // setCounter((currentState => currentState + 1))
        }

    return {counter, increment}
}