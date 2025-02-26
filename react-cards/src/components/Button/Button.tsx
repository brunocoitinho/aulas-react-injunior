import React, { useState } from 'react'
import styles from './style.module.css'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    children?: React.ReactNode
}



export default function Button(props:IButtonProps){
    //variavel, função 
    const [buttonText, setButtonText] = useState('Adicionar ao Carrinho')

    function handleClick(){
        alert('Adicionado ao Carrinho')
        setButtonText('No Carrinho')
    }

    return (
        <button {...props} 
        className={`${styles.button} ${props.className}`}
        onClick={handleClick}
        >
            {/* {props.children} */}
            {buttonText}
        </button>
    )
}