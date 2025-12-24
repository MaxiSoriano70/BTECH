/**
 * setTimeout y setInterval
 */

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

setTimeout(saludar, 5000, 'Juan');

let time = new Date();

setInterval(() => console.log(time.toLocaleDateString()), 1000);

/**
 * LIFO - Last In First Out: Ultimo en entrar, primero en salir
 * FIFO - First In First Out: Primero en entrar, primero en salir
 */

const promesa = new Promise((resolve, reject) => {

})

promesa.then( () => {
    console.log('La promesa se ha cumplido');
}).catch( () => {
    console.log('La promesa no se ha cumplido');
})

const usuarios = fetch('https://jsonplaceholder.typicode.com/users');

console.log(usuarios);

usuarios.then( response => response.json() )
        .then( data => console.log(data) )
        .catch( error => console.log('Hubo un error: ', error) );