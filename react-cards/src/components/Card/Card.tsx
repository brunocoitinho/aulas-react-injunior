import Input from '../Input/Input'
import styles from './style.module.css'
import { useState } from 'react'

interface IAlbumCardProps{
    cover: string,
    coverAlt: string,
    title: string,
    year: string,
    artist: string,
    genre: string,
    description: string
}

export default function Card(props: IAlbumCardProps){

  const [customTitle, setCustomTitle] = useState<string>('')
  const [showInput, setShowInput] = useState<boolean>(false)

  

    return (
        <div className={styles.card}>
        <img className={styles.card__img} src={props.cover} alt={props.coverAlt}  />
        <div className={styles.card__info}>
          <h2 className={styles.card__info__title}>{showInput? customTitle : props.title} ({props.year})</h2>
          <p className={styles.card__info__data}>
            Artista: {props.artist} <br />
            Gênero: {props.genre}
          </p>
          <p className={styles.card__info__text}>
            {props.description}
          </p>

          {showInput ?(
              <Input setCustomTitle={setCustomTitle} customTitle={customTitle}/>
            ): null 
          }

          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%'
          }}>
            <label htmlFor="customize">Customizar nome do álbum</label>
            <input 
              id='customize' 
              type="checkbox"
              checked={showInput}
              onChange={()=>{
                setShowInput((showInput)=>(!showInput))
              }}
            />
          </div>

          {/* <button onClick={()=>{
            setTitle('The Wall')
          }}>The Wall</button> */}
        </div>
      </div>
    )
}