import React from 'react'
import styles from "./Card.module.css"
export const Card = ({text,emoji=" 😆",vote=0,onDecrement,onIncrement}) => {
  return (
    <div className={styles.card}>
        <div className={styles.btnDiv}>
           <button onClick={onDecrement}>-</button>
           <span>{vote}</span>
           <button onClick={onIncrement}>+</button>
        </div>
      <div>
        <p className={styles.cardDesc}>{text}</p>
      </div>
      <div className={styles.cardEmoji}>
        {emoji}
     
      </div>
    </div>
  )
}

