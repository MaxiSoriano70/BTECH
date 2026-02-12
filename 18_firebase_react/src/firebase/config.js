// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCELbqvkjbcGajy1HhHbO0RVfAGzMum8Lc",
  authDomain: "btechclase18.firebaseapp.com",
  projectId: "btechclase18",
  storageBucket: "btechclase18.firebasestorage.app",
  messagingSenderId: "735920843636",
  appId: "1:735920843636:web:fda1a6575b76fb7608da21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);