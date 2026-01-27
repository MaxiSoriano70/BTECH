const ProductItem = ({ producto, index, onRemoveProducto }) => {
    return (
        <li>
            Nombre: {producto.nombre} - Precio: {producto.precio} - Stock: {producto.stock}
            <button onClick={() => onRemoveProducto(index)}>Eliminar</button>
        </li>
    )
}

export default ProductItem;
