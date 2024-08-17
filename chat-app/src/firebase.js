import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // for authentication
import { getStorage } from "firebase/storage"; // for storage
import { getDatabase } from "firebase/database"; // for realtime database
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // for cloud firestore

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MSI,
  appId: import.meta.env.VITE_APP_APP_ID,
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const database = getDatabase(firebaseApp);
const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup };
export { db, storage, database };
export default firebaseApp;
