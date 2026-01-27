import { useState } from "react";
import "./ProductForm.css";

const ProductForm = ({ onAddProducto }) => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");

    function handleAddProductoSubmit(e) {
        e.preventDefault();
        const nombreTrim = nombre.trim();
        if (nombreTrim === "") {
            alert("El nombre no puede estar vacío");
            return;
        }

        if (precio === "" || Number(precio) < 0) {
            alert("El precio no puede estar vacío ni ser negativo");
            return;
        }

        if (stock === "" || Number(stock) < 0) {
            alert("El stock no puede estar vacío ni ser negativo");
            return;
        }

        onAddProducto(nombreTrim, Number(precio), Number(stock));

        setNombre("");
        setPrecio("");
        setStock("");
    }


    return (
        <div className="containerAdd">
            <h2>Clase formularios y eventos</h2>

            <form className="formularioAdd" onSubmit={handleAddProductoSubmit}>
                <div className="containerInput">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>

                <div className="containerInput">
                    <label htmlFor="precio">Precio:</label>
                    <input
                        type="number"
                        id="precio"
                        min="0"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        required
                    />
                </div>

                <div className="containerInput">
                    <label htmlFor="stock">Stock:</label>
                    <input
                        type="number"
                        id="stock"
                        min="0"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default ProductForm;