import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCuDv5RuUVxlnNultX3KZFpdo_v_ezoe70",
  authDomain: "disneyplus-clone-85d9c.firebaseapp.com",
  projectId: "disneyplus-clone-85d9c",
  storageBucket: "disneyplus-clone-85d9c.appspot.com",
  messagingSenderId: "288107921168",
  appId: "1:288107921168:web:248b4b3e2e285e5facaf95",
  measurementId: "G-KXRY6YFG7W",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, storage, provider };
export default db;
