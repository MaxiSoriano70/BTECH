import './App.css'
import Add from './components/Add'
import Product from './components/Product'

function App() {
  const productos = [
    { id: 1, nombre: 'Camisa', precio: 20, stock: 10 },
    { id: 2, nombre: 'Pantalón', precio: 40, stock: 7 },
    { id: 3, nombre: 'Zapatos', precio: 60, stock: 15 }
  ]

  return (
    <>
    <h1>Renderizar listas</h1>
    {productos.map(producto => (
      <Product key={producto.id} nombre={producto.nombre} precio={producto.precio} cantidad={producto.stock}/>
    ))}
    <Add />
    </>
  )
}

export default App
