import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Saludo from './components/Saludo';

function App() {
  let nombre = 'BTech';

  /* FUNCION DE ESTADO */
    const [count, setCount] = useState(0);
    /* FUNCION DE ORDEN SUPERIOR */
    /* Primer parametro es el que va a hacer
        Segundo parametro es donde va a cambiar*/
    useEffect(() => {
        console.log('El componente Counter cambio.', count);
    }, [count]);

    function handleClick() {
        setCount(count + 1);
    }


  return (
    <>
      <h1>HOOKS en acción</h1>
      <h2>Hola {nombre}</h2>
      <Counter value={count} onClick={handleClick}/>
      <Saludo nombre="Celeste"/>
      <Saludo nombre="Emily"/>
      <Saludo nombre="Javier"/>
      <Saludo nombre="Nadia"/>
    </>
  )
}

export default App
