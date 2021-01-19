import React, { useState, useRef } from 'react';

function App() {

  const [desc, setDesc] = useState('Empty');  
  const [valor, setValor] = useState(0);  

  const inputText = useRef();

  function adicionarPost() {
    setDesc(inputText.current.value);
  }

  function adicionarContador() {
    setValor(valor + 1);
  }

  function subtrairContador() {
    setValor(valor - 1);
  }

  return (
    <>
      <p>{desc}</p>
      <input type="text" ref={inputText}/>
      <button onClick={adicionarPost}>Postar</button>
      <p>{valor}</p>
      <button onClick={adicionarContador}>+</button>
      <button onClick={subtrairContador}>-</button>

    </>
  ); 
}

export default App;
