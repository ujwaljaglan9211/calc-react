import React, { useState, useEffect } from 'react'
import Button from '../Button'
import StylesKeypad from './index.module.css'
const Keypad = (props) => {
  const [result, setResult] = useState("")
  function handleKeypadChange(value) {
    setResult(result.concat(value))
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    props.onChange(result)
  },[result]);

  return (
    <div className={StylesKeypad.keypad}>
      <div className={StylesKeypad.row}>      
        <Button buttonId="clear" buttonValue="Clear" onChange={handleKeypadChange}/>   
        <Button buttonId="backspace" buttonValue="C" onChange={handleKeypadChange}/>
        <Button buttonId="result" buttonValue="Result" onChange={handleKeypadChange}/>
      </div>
      <div className={StylesKeypad.row}>
        <Button buttonName="/" buttonValue="/" onChange={handleKeypadChange}/>
        <Button buttonName="*" buttonValue="&times;" onChange={handleKeypadChange}/>
        <Button buttonName="-" buttonValue="-" onChange={handleKeypadChange}/>
        <Button buttonName="+" buttonValue="+" onChange={handleKeypadChange}/>        
      </div>
      <div className={StylesKeypad.row}>
        <Button buttonName="9" buttonValue="9" onChange={handleKeypadChange}/>
        <Button buttonName="8" buttonValue="8" onChange={handleKeypadChange}/>
        <Button buttonName="7" buttonValue="7" onChange={handleKeypadChange}/>
        <Button buttonName="6" buttonValue="6" onChange={handleKeypadChange}/>
      </div>    
      <div className={StylesKeypad.row}>     
        <Button buttonName="5" buttonValue="5" onChange={handleKeypadChange}/>
        <Button buttonName="4" buttonValue="4" onChange={handleKeypadChange}/>  
        <Button buttonName="3" buttonValue="3" onChange={handleKeypadChange}/>
        <Button buttonName="2" buttonValue="2" onChange={handleKeypadChange}/>
      </div>
      <div className={StylesKeypad.row}>
        <Button buttonName="1" buttonValue="1" onChange={handleKeypadChange}/>
        <Button buttonName="0" buttonValue="0" onChange={handleKeypadChange}/>
        <Button buttonName="." buttonValue="." onChange={handleKeypadChange}/>
      </div>
    </div>
  )
}

export default Keypad
