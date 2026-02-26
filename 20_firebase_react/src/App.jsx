import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  onSnapshot, 
  deleteDoc, 
  updateDoc, 
  query, 
  orderBy,
  doc // 👈 agregado porque lo usás en update
} from "firebase/firestore";

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
    //Autentica al usuario de forma anónima
    signInAnonymously(auth)
      .then(() => {
        console.log("Usuario autenticado de forma anónima");
      })
      .catch((error) => {
        console.error("Error al autenticar de forma anónima:", error);
      });

    //Escucha los cambios en el estado de autenticación
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);

        //Consulta las tareas del usuario autenticado y actualiza el estado en tiempo real
        const consulta = query(
          collection(db, "tareas"),
          orderBy("fechaDeCreacion", "desc") // 👈 corregido
        );

        const unsubscribeSnapshot = onSnapshot(consulta, (snapshot) => {
          const tareas = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setListaDeTareas(tareas);
        });

        setCargando(false);

        // Limpieza del listener de Firestore
        return () => unsubscribeSnapshot();
      } else {
        setUsuario(null);
      }
    });

    // Limpieza del listener de Auth
    return () => unsubscribeAuth();

  }, /*2do parametro dice ejecuta esto una sola vez*/ []);

  
  /*useEffect(() => {
    signInAnonymously(auth)
      .then(() => {
        console.log("Usuario autenticado de forma anónima");
      })
      .catch((error) => {
        console.error("Error al autenticar de forma anónima:", error);
      });
    return onAuthStateChanged(auth, (user) => {
      if(!user) {
        setCargando(false);
        setUsuario(null);
      }
    });
  }, []);

  //Función para agregar una tarea a Firestore
  useEffect(() => {
    if(!usuario) {
      setCargando(false);
      return
    }
    const consulta = query(collection(db, "tareas"), orderBy("fecha", "desc"));
    const desucribir = onSnapshot(consulta, (snapshot) => {
      const tareas = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCargando(false);
      setListaDeTareas(tareas);
      return () => desucribir();
    });
  }, [usuario]);*/

  const agregarTarea = async (e) => {
    e.preventDefault();
    if(!tarea.trim()) {
      console.log("La tarea está vacía");
      return;
    }

    if(idTareaEnEdicion) {
      //Editar tarea
      try {
        const docRef = doc(db, "tareas", idTareaEnEdicion);
        await updateDoc(docRef, {
          nombre: tarea,
        });
        setTarea("");
        setIdTareaEnEdicion(null);
      } catch (error) {
        console.error("Error al editar la tarea:", error);
      }
    } else {
      //Agregar nueva tarea
      try {
        await addDoc(collection(db, "tareas"), {
          nombre: tarea,
          fechaDeCreacion: Date.now(),
          completa: false,
          uidUsuario: usuario.uid,
        });
        setTarea("");
      } catch (error) {
        console.error("Error al agregar la tarea:", error);
      }
    }
  };

  const activarEdicion = (tarea) => {
    setTarea(tarea.nombre);
    setIdTareaEnEdicion(tarea.id);
  };

  if(cargando) {
    return <h1>Cargando...</h1>
  }

  return (
    <div>
      <h1>Lista de tareas</h1>
    </div>
  );
}

export default App;