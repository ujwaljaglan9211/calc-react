import React, {useState, useEffect} from 'react'
import './index.module.css'
import Screen from './Screen'
import Keypad from './Keypad'

const Calculator = () => {

  const operators = ['+', '-', '*', '/', '%']
  const trigno = ['sin', 'cos', 'tan', '^2']
  const [equation, setEquation] = useState('')
  const [result, setResult] = useState(0)
  
  useEffect(() => {
      // console.log(equation)
  }, [equation, result]);

  function onButtonPress(event){
    let eq = equation
    var pressedButton = event.target.innerHTML;

    if (pressedButton === 'C') 
      return clear()
    else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') 
      eq += pressedButton;
    else if (operators.indexOf(pressedButton) !== -1) {
      if (operators.includes(eq.slice(-1)) ) {
        eq = eq.slice(0, -1)+ pressedButton;
      }
      else {
        eq += pressedButton
      }
    }
    else if (trigno.indexOf(pressedButton) !== -1){
      try {
        switch (pressedButton) {
          case 'sin':
            eq = Math.sin(eq)
            break
          case 'cos':
            eq = Math.cos(eq)
            break
          case 'tan':
            eq = Math.tan(eq)
            break
          case '^2':
            eq = eq * eq
        }
      } catch (error) {
          setResult("INVALID INPUT");
      }
    }
    else if (pressedButton === '=') {
      try {
          const evalResult = eval(eq);
          setResult(Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2))
          // const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
          // this.setState({result});)
      } catch (error) {
          alert('Invalid Mathematical Equation');
      }
    }
    else {
      eq = eq.trim();
      eq = eq.substr(0, eq.length - 1);
    }
         
    setEquation(eq)
  }

  function clear() {
    setEquation('')
    setResult(0)
  }

  return (
      <main className="calculator">
          <Screen equation={equation} result={result} />
          <Keypad onButtonPress={onButtonPress} />
      </main>
  )
}

export default Calculator
