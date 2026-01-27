import ProductItem from "../productItem/ProductItem";

const ProductList = ({productos, onRemoveProducto}) => {
    return (
        <>
            <h2>Lista de productos</h2>
            <ul>
                {productos.map((producto, index) => (
                    <ProductItem key={index} producto={producto} index={index} onRemoveProducto={onRemoveProducto}/>
                ))}
            </ul>
        </>
    )
}

export default ProductList;
