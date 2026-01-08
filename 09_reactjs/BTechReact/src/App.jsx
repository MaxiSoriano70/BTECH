import './App.css';
import Counter from './Counter';
import Saludo from './Saludo';

function App() {
  let nombre = 'BTech';

  return (
    <>
      <h1>HOOKS en acción</h1>
      <h2>Hola {nombre}</h2>
      <Counter/>
      <Saludo/>
    </>
  )
}

export default App
