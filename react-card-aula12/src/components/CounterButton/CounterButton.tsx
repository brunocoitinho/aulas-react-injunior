import useCounter from '../../hooks/useCounter'
import styles from './styles.module.css'


export default function CounterButton(){
    //variavel, função 
    const {counter, increment} = useCounter()

    return (
        <button
        className={styles.button}
        onClick={increment}
        >
            Contador: {counter}
        </button>
    )
}