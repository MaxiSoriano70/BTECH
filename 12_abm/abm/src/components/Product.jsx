const Product = (props) => {
    return (
        <div>
            <h2>{props.nombre}</h2>
            <p>Precio: ${props.precio}</p>
            <p>Cantidad: {props.cantidad}</p>
        </div>
    )
}

export default Product;
