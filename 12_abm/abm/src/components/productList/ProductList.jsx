import ProductItem from "../productItem/ProductItem";
import "./ProductList.css";

const ProductList = ({ productos, onRemoveProducto }) => {
    return (
        <div className="product-list">
            <h2>Lista de productos</h2>
            <ul>
                {productos.map((producto, index) => (
                    <ProductItem
                        key={index}
                        producto={producto}
                        index={index}
                        onRemoveProducto={onRemoveProducto}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
