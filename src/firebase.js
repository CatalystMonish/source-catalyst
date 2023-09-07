import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // <-- Add this line

const firebaseConfig = {
  apiKey: "AIzaSyDFfKgs7VGEc92lo8PjE1I03RR3nuHfXJo",
  authDomain: "source-catalyst-plus.firebaseapp.com",
  databaseURL: "https://source-catalyst-plus-default-rtdb.firebaseio.com",
  projectId: "source-catalyst-plus",
  storageBucket: "source-catalyst-plus.appspot.com",
  messagingSenderId: "651986108285",
  appId: "1:651986108285:web:3d05c25b4fffccfa895614",
  measurementId: "G-ZWY6L5JFNE",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // <-- Add this line

export { app, db, auth, storage }; // <-- Add storage to the export list