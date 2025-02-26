import styles from './style.module.css'

interface IInputProps{
    customTitle: string
    setCustomTitle: (title : string) => void
}

export default function Input(props: IInputProps){
    return (
        <input 
            className={styles.card__info__input} 
            type="text"
            placeholder='Nome do Album'
            value={props.customTitle}
            onChange={(e) => {
                props.setCustomTitle(e.target.value)
            }}
        />
    );
}