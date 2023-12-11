import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);

// main function

const AuthProvider = ({ children }) => {
  // state declaration
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   load terms and conditon data
  const [terms, setTerms] = useState([]);
  useEffect(() => {
    fetch("https://the-news-dragon-server-1bqd2sont-ahsanulhoqueabir.vercel.app/terms")
      .then((res) => res.json())
      .then((data) => setTerms(data));
  }, []);

  //   create user function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   log i user funtion
  const LoggedInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   update profile info function
  const updateProfileData = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  //   log out function
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };
  //   check user login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      //   console.log("logged user: ", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    LoggedInUser,
    updateProfileData,
    logOut,
    loading,
    terms,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
