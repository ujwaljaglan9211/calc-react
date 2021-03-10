import React from 'react'
import StylesButton from './index.module.css'
const Button = (props) => {
  function handleKeypadChange(event) {
    // Here, we invoke the callback with the new value
    props.onChange(event.target.name);
  }

  // function handleClick(e){
  //   const result = props.result
  //   props.setResult(result.concat(e.target.name))
  // }
  // function backspace(){

  // }

  // function clear(){

  // }
  return (
    <>
    <button id={props.buttonId} name={props.buttonName} onClick={handleKeypadChange}>
      {props.buttonValue}      
    </button>
    </>
  )
}

export default Button
