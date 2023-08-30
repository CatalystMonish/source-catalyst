import React, { createContext, useContext, useEffect, useState } from "react";

import { getStorage, ref, uploadBytes } from "firebase/storage";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  const checkAndCreateUserDoc = async (currentUser) => {
    const userRef = doc(db, "users", currentUser.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      const { displayName, email, photoURL, emailVerified } = currentUser;
      await setDoc(userRef, {
        displayName,
        email,
        photoURL,
        emailVerified,
        // Add any other necessary fields here.
      });
    }
  };

  const uploadFileToStorage = async (file) => {
    if (!file) {
      alert("No file selected.");
      return;
    }

    const storage = getStorage();
    const storageRef = ref(storage, `users/${user.uid}/resume/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      alert("File uploaded successfully");
    } catch (error) {
      alert("An error occurred while uploading the file");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log("Currentuser", currentUser);

      if (currentUser) {
        await checkAndCreateUserDoc(currentUser);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ googleSignIn, logOut, user, uploadFileToStorage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
