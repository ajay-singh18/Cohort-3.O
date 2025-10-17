
export interface ButtonProps{
    variant: "primary" | "secondary",
    size : "sm" | "md" | "lg",
    text : string,
    startIcon? : any,
    endIcon? : any,
    onClick : ()=>void
}

import React from 'react'

const Buttons = (props:ButtonProps) => {
  return (
    <div>
        <button className='text-{props.size} text-{props.primary}'
        onClick={props.onClick}
        >{props.text}</button>
    </div>
  )
}

export default Buttons