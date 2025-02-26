import styles from './style.module.css'

export default function Header(){
    const nome = 'Mundo'

    return (
        <>
            <header>
                <h1 className="" 
                style={{
                        color: 'red',
                        fontSize: '24px'
                    }}
                >
                    
                    Olá {nome}</h1>
                <nav className={styles.nav}><a href="#">Página Principal</a><a href="#">Contato</a><a href="#">Sobre nós</a></nav>
                <hr />
            </header>
        </>
    )
}