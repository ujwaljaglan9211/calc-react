import React, { useState, useEffect, useRef } from 'react'
import StylesOutput from './index.module.css'

const Output = (props) => {

  return (
    <div className={StylesOutput.calcAapp}>
      <form>
        <input type="text" value={props.result} ref={props.inputRef}/>
      </form>
    </div>
  )
}

export default Output
