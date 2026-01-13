function Counter(props) {
    return (
        <>
            <h3>Componente Counter</h3>
            <p>Contador: {props.value}</p>
            <button onClick={props.onClick}>Incrementar</button>
        </>
    )
}

export default Counter;