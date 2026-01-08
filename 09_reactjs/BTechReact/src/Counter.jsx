import {useState, useEffect} from 'react';

function Counter() {
    /* FUNCION DE ESTADO */
    const [count, setCount] = useState(0);
    /* FUNCION DE ORDEN SUPERIOR */
    /* Primer parametro es el que va a hacer
        Segundo parametro es donde va a cambiar*/
    useEffect(() => {
        console.log('El componente Counter cambio.', count);
    }, [count]);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <h3>Componente Counter</h3>
            <p>Contador: {count}</p>
            <button onClick={handleClick}>Incrementar</button>
        </>
    )
}

export default Counter;