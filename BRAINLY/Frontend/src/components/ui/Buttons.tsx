
interface ButtonProps{
    variant: "primary" | "secondary",
    size : "sm" | "md" | "lg",
    text : string,
    startIcon? : any,
    endIcon? : any,
    onClick : ()=>void
}
const VariantStyle = {
  "primary" : "bg-purple-600 text-white",
  "secondary" : "bg-purple-300 text-purple-400" 
}
const sizeStyle={
  "sm": "py-1 px-2",
  "md": "py-2 px-4",
  "lg": " py-3 px-6"
}
const defaultStyle = "rounded-md "
import React from 'react'   // fhjhghjhghgghkgfndkfjdslkfjdslfdsfdsfdsf

const Buttons = (props:ButtonProps) => {
  return (
    <>
        <div className='flex'>
          <button
        className={`${VariantStyle[props.variant]} ${defaultStyle} ${sizeStyle[props.size]}  `} 
        >{props.startIcon} {props.text} {props.endIcon}</button>
        </div>
    </>
  )
}

export default Buttons