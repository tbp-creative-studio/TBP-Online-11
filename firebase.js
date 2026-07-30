import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpvddFSfq2lKisWRE9Vi-I8zJBcZ-ZIcw",
  authDomain: "tbp-online.firebaseapp.com",
  projectId: "tbp-online",
  storageBucket: "tbp-online.firebasestorage.app",
  messagingSenderId: "1098324003408",
  appId: "1:1098324003408:web:9be268a85a6388d8975f55",
  measurementId: "G-5VPZJ0WZMD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
