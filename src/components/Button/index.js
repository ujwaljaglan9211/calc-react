import React from 'react'
import './index.module.css'
const Button = (props) => {

  const classes = ['btn'];
  if (typeof props !== 'undefined' && typeof props.type !== 'undefined')
    classes.push('btn--' + props.type);

  return (
    <button className={classes.join(' ')} onClick={props.onButtonPress}>
      {props.children}
    </button>
  )
}

export default Button
