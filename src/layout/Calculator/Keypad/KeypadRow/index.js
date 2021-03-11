import React from 'react'
import './index.module.css'

const KeypadRow = (props) => {
  return (
    <div className="keypad__row">
        {props.children}
    </div>
  )
}

export default KeypadRow
