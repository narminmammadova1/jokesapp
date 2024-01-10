import { useEffect, useState } from 'react'
import React from 'react'
import { JokesContent } from '../../componennts/jokes/JokesContent'
import { getJokes } from '../../Service'
export const JokesPage = () => {
 const [data,setData]=useState([])
 useEffect(()=>{
    handleData()
 },[])

 const handleData=async ()=>{
    const res=await getJokes()
    const newData=res.data.results.map(item=>({...item,vote:0}))
    setData(newData)
    console.log("res",res);

 }
 const handleRemoveVote=(i)=>{
    let newData=[...data]
    newData[i]={...newData[i],
        vote:newData[i].vote-1}
        newData.sort((itema,itemZ)=>itemZ.vote-itema.vote)
        setData(newData)
    console.log("i",newData[i]);
 }
 const handleAddVote=(i)=>{ let newData=[...data]
    newData[i]={...newData[i],
        vote:newData[i].vote+1}
        newData.sort((itema,itemZ)=>itemZ.vote-itema.vote)

        setData(newData)
    console.log("i",newData[i]);}
  return (
    <div>
     <JokesContent data={data} plus={handleAddVote} minus={handleRemoveVote}/>
    </div>
  )
}


