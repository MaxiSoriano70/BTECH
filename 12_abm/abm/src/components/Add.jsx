import { useState } from "react";

const Add = () => {
    const [nombre, setNombre] = useState("");
    const  [apellido, setApellido] = useState("");

    const [productos, setProductos] = useState([]);

    function addProducto(e) {
        e.preventDefault();
        /* spread operator */
        const aux = nombre + " " + apellido;
        setProductos([...productos, aux]);
        setNombre("");
        setApellido("");
    }

    return (
        <div>
            <h2>Clase formularios y eventos</h2>
            <form action="">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                <button type="submit" onClick={addProducto}>Agregar</button>
            </form>
            <p>Escribiste: {nombre} {apellido}</p>
            <ul>
                {productos.map((producto, index) => (
                    <li key={index}>{producto}</li>
                ))}
            </ul>
        </div>
    )
}

export default Add;
