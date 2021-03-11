import React from 'react'
import './index.module.css'
import ResultScreen from './ResultScreen'
import ComputationScreen from './ComputationScreen'

const Screen = (props) => {
  return (
    <section className="screen">
        <ResultScreen>{props.result}</ResultScreen>
        <ComputationScreen>{props.equation}</ComputationScreen>
    </section>
  )
}

export default Screen
