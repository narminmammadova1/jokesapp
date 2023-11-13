 import React from 'react'
 import styles from "./JokesContent.module.css"
import { Smiles } from '../../../Constant/smiles'
 import { Card } from '../../Card'
 export const JokesContent = ({data,plus,minus}) => {

    const handleEmoji=(i)=>{
        let emoji
        if(i<2){
            emoji=Smiles.smile1
        }
        if(i<6 && i>=3){
            emoji=Smiles.smile2
        }
        if(i>=7 ){
            emoji=Smiles.smile3
        }
        if(i>=8){
            emoji=Smiles.smile5
        }
        if(i>=9){
            emoji=Smiles.smile6
        }
return emoji
    }
   return (
     <div className={styles.content}>
        <div className={styles.box}>
            <div className={styles.leftSide}>
                <p className={styles.leftTitle}>DAD Jokes</p>
                <img width="100px" src="https://parspng.com/wp-content/uploads/2022/06/imojipng.parspng.com-4.png" alt="" />
            </div>
            <div className={styles.rightSide}>

 {data?.map((item,index)=>{
    const emoji=handleEmoji(index)
    return <Card vote={item.vote} text={item.joke} emoji={emoji} 
    onDecrement={()=>plus(index)} 
    onIncrement={()=>minus(index)}/>
 } )}


            </div>
        </div>
       
     </div>
   )
 }

 