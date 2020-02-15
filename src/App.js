import React,{ useState } from 'react';
import Header from './Header';

//Componet = Bloco isolado de HTML, CSS e JS 
// Propriedade = 
// Estado = 
function App() {
  const [counter,setCounter] =useState(0);

  function inclementCounter(){
    setCounter(counter + 1)
  }
  
  return (
    <>
    <h1>Contador: {counter}</h1>
    <button onClick={inclementCounter}>Incrementar</button>
  </>
  );
}

export default App;
