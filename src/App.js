import React, { useState } from 'react';
import * as math from 'mathjs';
import './App.css';


function App ()  {

  const [input,setInput]=useState('');

  const [result,setResult]=useState(0);

  const handleInputChange=e=>{
    setInput(e.target.value);
  }
  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleArithmetic = (operator) => {
    setInput(input + operator);
  };

  const handleEquals = () => {
    try {
      const result = math.evaluate(input);
      setInput(result);
    } catch (error) {
      console.log(error);
    }
  }; 
  const handleKeyPress = (e) => {
    const pattern = /^[0-9\b]+$/; // only allow numeric input and backspace (\b)
    if (!pattern.test(e.key)) {
      e.preventDefault();
    }
  };
   
    return (<div className='App'>

     

      <input type='text' value={input} name='input' onChange={handleInputChange} onKeyPress={handleKeyPress} /><br/><br/>
      <button onClick={()=>setResult(math.evaluate(input))} >Result</button><br/><br/>
        <h1>Result : {result}</h1>
        <h1>
        <button onClick={()=>setInput(input+'1')}>1</button>
        <button onClick={()=>setInput(input+'2')}>2</button>
        <button onClick={()=>setInput(input+'3')}>3</button>
        <button onClick={()=>setInput(input+'4')}>4</button>
        <button onClick={()=>setInput(input+'5')}>5</button><br/><br/>
        <button onClick={()=>setInput(input+'6')}>6</button>
        <button onClick={()=>setInput(input+'7')}>7</button>
        <button onClick={()=>setInput(input+'8')}>8</button>
        <button onClick={()=>setInput(input+'9')}>9</button>
        <button onClick={()=>setInput(input+'0')}>0</button>
        <br />
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleBackspace}>Backspace</button><br/>
        <button onClick={() => handleArithmetic('+')}>+</button>
        <button onClick={() => handleArithmetic('-')}>-</button>
        <button onClick={() => handleArithmetic('*')}>*</button>
        <br/>
        <button onClick={() => handleArithmetic('/')}>/</button>
        <button onClick={() => handleArithmetic('(')}>(</button>
        <button onClick={() => handleArithmetic(')')}>)</button>
        <button onClick={handleEquals}>=</button>
        <br />
        </h1>       

    </div>
    
    )
  }
export default App;
