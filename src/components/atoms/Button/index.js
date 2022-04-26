import React from 'react'
import { ButtonElement } from "./ButtonElement";

const Button = ({width, height, color, hover, text, onClick, textColor= '#fff'}) => {
  return (
    <ButtonElement color={color} width={width} height={height} hover={hover} onClick={onClick} textColor={textColor}>{text}</ButtonElement>
  )
}

export default Button