import { useState } from 'react';
import './App.css'
import ProductForm from './components/productForm/ProductForm'
import ProductList from './components/productList/ProductList'

function App() {
  const productosList = [
    { id: 1, nombre: 'Camisa', precio: 20, stock: 10 },
    { id: 2, nombre: 'Pantalón', precio: 40, stock: 7 },
    { id: 3, nombre: 'Zapatos', precio: 60, stock: 15 }
  ]

  const [productos, setProductos] = useState(productosList);

  /* función para agregar un producto al arreglo de productos */
  function addProducto(nombre, precio, stock) {
      /* spread operator */
      setProductos([...productos, {nombre, precio, stock}]);
  }

  /* función para eliminar un producto del arreglo de productos */
  function removeProducto(index) {
      const aux = productos.filter((producto, i) => i !== index);
      setProductos(aux);
  }

  return (
    <>
    <h1>Arquitectura de componentes</h1>
    <ProductForm onAddProducto={addProducto}/>
    <ProductList productos={productos} onRemoveProducto={removeProducto}/>
    </>
  )
}

export default App;