import React from "react";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, updateDoc, query, orderBy} from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCELbqvkjbcGajy1HhHbO0RVfAGzMum8Lc",
  authDomain: "btechclase18.firebaseapp.com",
  projectId: "btechclase18",
  storageBucket: "btechclase18.firebasestorage.app",
  messagingSenderId: "735920843636",
  appId: "1:735920843636:web:fda1a6575b76fb7608da21"
};

//Inicializa Firebase
const app = initializeApp(firebaseConfig);
//Inicializa Auth y Firestore
const auth = getAuth(app);
//Exporta la base de datos para usarla en otros archivos
const db = getFirestore(app);

function App() {
  //Definimos el estado para la app
  const [usuario, setUsuario] = useState(null);
  const [listaDeTareas, setListaDeTareas] = useState([]);
  const [tarea, setTarea] = useState("");
  const [cargando, setCargando] = useState(true);
  const [idTareaEnEdicion, setIdTareaEnEdicion] = useState(null);

  //Efecto para manejar la autenticación anónima
  useEffect(() => {
    signInAnonymously(auth)
      .then(() => {
        console.log("Usuario autenticado de forma anónima");
      })
      .catch((error) => {
        console.error("Error al autenticar de forma anónima:", error);
      });

    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
        const consulta = query(collection(db, "tareas"), orderBy("fecha", "desc"));
        onSnapshot(consulta, (snapshot) => {
          const tareas = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setListaDeTareas(tareas);
        });
        setCargando(false);
      } else {
        setUsuario(null);
      }
    });
  }, /*2do parametro dice ejecuta esto una sola vez*/ []);


}

export default App;
