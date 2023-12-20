// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdQ9HQk43dnrMglXeBQk315_VJdjIixDE",
  authDomain: "event-management-fbc13.firebaseapp.com",
  projectId: "event-management-fbc13",
  storageBucket: "event-management-fbc13.appspot.com",
  messagingSenderId: "214214747289",
  appId: "1:214214747289:web:56c8673e883addab3b8408"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;