import { useEffect } from 'react'
import useCounter from '../../hooks/useCounter'
import styles from './styles.module.css'


export default function CounterButton(){
    //variavel, função 
    const {counter, increment} = useCounter()

    useEffect(()=>{
        console.log('Função executada')

        return()=>{
            console.log ('Função de limpeza executada')
        }
    })

    return (
        <button
        className={styles.button}
        onClick={increment}
        >
            Contador: {counter}
        </button>
    )
}