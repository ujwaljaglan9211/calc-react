import React from 'react'
import './index.module.css'

const ComputationScreen = (props) => {
  return (
    <div className="computation-screen">
        {props.children}
    </div>
  )
}

export default ComputationScreen
