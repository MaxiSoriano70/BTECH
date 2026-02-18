import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";

function App() {
  const [text, setText] = useState("");
  const [products, setProducts] = useState([]);

  //Obtiene los productos de la base de datos
  useEffect(() => {
    const getProducts = async () => {
      //Trae los productos de la base de datos y los guarda en el estado local
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      //Guarda los productos en el estado local
      setProducts(productsData);
    };

    getProducts();
  }, []);

  //Agregar producto
  async function handleAdd() {
    //Si el input esta vacio no se agrega nada
    if (text.trim() === "") return;
    //Agrega un nuevo producto a la base de datos
    const docRef = await addDoc(collection(db, "products"), {
      name: text,
    });
    //Agrega el nuevo producto al estado local
    setProducts([...products, { id: docRef.id, name: text }]);
    //Limpia el input
    setText("");
  }

  return (
    <>
      <h1>React + Firebase</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>Agregar</button>

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
