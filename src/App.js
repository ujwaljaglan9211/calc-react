import { useState, useEffect, useRef } from 'react'
import Output from './components/Output'
import Keypad from './components/Keypad'
import logo from './logo.svg';
import './App.css';

function App() {

  const [result, setResult] = useState("")
  const inputRef = useRef(null)

  useEffect( ()=> inputRef.current.focus())

  return (
    <div className="App">
      <Output result={result} inputRef={inputRef} />
      <Keypad result={result} setResult={setResult} />
    </div>
  );
}

export default App;
