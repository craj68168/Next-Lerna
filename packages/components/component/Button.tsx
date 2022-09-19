import React, { useState } from 'react'

interface IProps{
    onClick:()=>void
}
const Button:React.FC<IProps> = (props) => {
   
  return (
    <div>
        <button {...props}>Click</button>
    </div>
  )
}

export default Button