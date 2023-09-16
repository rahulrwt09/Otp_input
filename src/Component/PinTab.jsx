import React, { useRef, useState } from 'react'

export const PinTab = ({length, maxchar}) => {
    const [pinLength, setPinlength] = useState(new Array(length).fill(""))
    let inputref= useRef([]);
    console.log(inputref)
    const handelFocus= (e, index)=>{
        if(e.target.value.length===maxchar && index<length-1){
          inputref.current[index+1].focus();
        }
    }
    return (
    <>
    {
    pinLength.map((_, index)=>{
        return <input key ={index}
        ref={(e)=>{
          inputref.current[index]=e;
        }} 
        maxLength={maxchar}
        onChange={(e)=>{handelFocus(e,index)}}
        ></input>
    })
}
    </>
  )
}
