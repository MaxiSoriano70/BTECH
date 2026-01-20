import { useEffect, useState } from "react";
import "./Add.css";

const Add = () => {
    const [nombre, setNombre] = useState("");
    const  [apellido, setApellido] = useState("");

    const [productos, setProductos] = useState([]);

    /* El useEffect trabaja con el DOM, es decir, se ejecuta después de que el componente se ha renderizado.
    1er parametro que es lo que va ahacer el useEffect
    2do es un array donde se envia el estado que se quiere observar */
    useEffect(() => {
        console.log("Productos actualizados: ", productos);
        alert("Productos actualizados: " + JSON.stringify(productos));
    }, [productos]);

    /* función para agregar un producto al arreglo de productos */
    function addProducto(e) {
        e.preventDefault();
        /* spread operator */
        setProductos([...productos, {nombre, apellido}]);
        setNombre("");
        setApellido("");
    }

    /* función para eliminar un producto del arreglo de productos */
    function removeProducto(index) {
        const aux = productos.filter((producto, i) => i !== index);
        setProductos(aux);
    }

    return (
        <div className="containerAdd">
            <h2>Clase formularios y eventos</h2>
            <form action="" className="formularioAdd">
                <div className="containerInput">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="containerInput">
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <button type="submit" onClick={addProducto}>Agregar</button>
            </form>
            <p>Escribiste: {nombre} {apellido}</p>
            <ul>
                {productos.map((producto, index) => (
                    <li key={index}>
                        Nombre: {producto.nombre} - Apellido: {producto.apellido}
                        <button onClick={() => removeProducto(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Add;
