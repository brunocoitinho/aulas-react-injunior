import { useContext } from 'react'
import styles from './style.module.css'
import { UserContext } from '../../stores/UserContext'



export default function Button(){
    const userData = useContext(UserContext)

    return (
        <button 
        className={`${styles.button}`}
        >
            {userData?.name}
        </button>
    )
}