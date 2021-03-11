import React from 'react'
import './index.module.css'

const ResultScreen = (props) => {
  return (
    <div className="result-screen">
        {props.children}
    </div>
  )
}

export default ResultScreen
