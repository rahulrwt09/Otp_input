import React, { useState } from 'react'

export const PinTab = ({length, maxchar}) => {
    const [pinLength, setPinlength] = useState(new Array(length).fill(""))
  return (
    <>{
    pinLength.map((_, index)=>{
        return <input key ={index} maxLength={maxchar}></input>
    })
}
    </>
  )
}
