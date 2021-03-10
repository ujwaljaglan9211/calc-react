import React, { useState } from 'react'
import Button from '../Button'
import StylesKeypad from './index.module.css'
const Keypad = (props) => {
  return (
    <div className={StylesKeypad.keypad}>
      <div className={StylesKeypad.row}>      
        <Button buttonId="clear" buttonValue="Clear" />   
        <Button buttonId="backspace" buttonValue="C"/>
        <Button buttonId="result" buttonValue="Result"/>
      </div>
      <div className={StylesKeypad.row}>
        <Button buttonName="/" buttonValue="/" result={props.result} setResult={props.setResult} />
        <Button buttonName="*" buttonValue="&times;" result={props.result} setResult={props.setResult} />
        <Button buttonName="-" buttonValue="-" result={props.result} setResult={props.setResult} />
        <Button buttonName="+" buttonValue="+" result={props.result} setResult={props.setResult} />        
      </div>
      <div className={StylesKeypad.row}>
        <Button buttonName="9" buttonValue="9" result={props.result} setResult={props.setResult} />
        <Button buttonName="8" buttonValue="8" result={props.result} setResult={props.setResult} />
        <Button buttonName="7" buttonValue="7" result={props.result} setResult={props.setResult} />
        <Button buttonName="6" buttonValue="6" result={props.result} setResult={props.setResult} />
      </div>    
      <div className={StylesKeypad.row}>     
        <Button buttonName="5" buttonValue="5" result={props.result} setResult={props.setResult} />
        <Button buttonName="4" buttonValue="4" result={props.result} setResult={props.setResult} />  
        <Button buttonName="3" buttonValue="3" result={props.result} setResult={props.setResult} />
        <Button buttonName="2" buttonValue="2" result={props.result} setResult={props.setResult} />
      </div>
      <div className={StylesKeypad.row}>
        <Button buttonName="1" buttonValue="1" result={props.result} setResult={props.setResult} />
        <Button buttonName="0" buttonValue="0" result={props.result} setResult={props.setResult} />
        <Button buttonName="." buttonValue="." result={props.result} setResult={props.setResult} />
      </div>
    </div>
  )
}

export default Keypad
