import "./ProductItem.css";

const ProductItem = ({ producto, index, onRemoveProducto }) => {
    return (
        <li className="product-item">
            <div className="product-info">
                <span>{producto.nombre}</span>
                <span>$ {producto.precio}</span>
                <span>Stock: {producto.stock}</span>
            </div>

            <button
                className="delete-btn"
                onClick={() => onRemoveProducto(index)}
            >
                Delete
            </button>
        </li>
    );
};

export default ProductItem;
