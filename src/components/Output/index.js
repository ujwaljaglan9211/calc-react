import React, { useState, useEffect, useRef } from 'react'
import Keypad from '../Keypad'
import StylesOutput from './index.module.css'

const Output = (props) => {
  const [result, setResult] = useState("")
  function handleOutputChange(setValue) {
    setResult(setValue)
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log(result)
  }, [result]);
  
  return (
    <>
      <div className={StylesOutput.calcAapp}>
          <input type="text" value={result} />
      </div>
      <Keypad onChange={handleOutputChange} />
    </>
  )
}

export default Output
