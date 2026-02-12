import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";

function App() {
  const [text, setText] = useState("");
  const [products, setProducts] = useState([]);

  // 🔹 Traer productos al cargar el componente
  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setProducts(productsData);
    };

    getProducts();
  }, []);

  // 🔹 Agregar producto
  async function handleAdd() {
    if (text.trim() === "") return;

    const docRef = await addDoc(collection(db, "products"), {
      name: text,
    });

    setProducts([...products, { id: docRef.id, name: text }]);
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
