/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const userContext = createContext([]);

const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState();

  // create new user using email and password
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Authenticate using google
  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Authenticate using github
  const githubProvier = new GithubAuthProvider();
  const signInUsingGitHub = () => {
    return signInWithPopup(auth, githubProvier);
  };

  //   sign in existing user using email and password
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // get user data using onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User in the auth state changed: ", currentUser);
      if (currentUser) {
        setUserData(currentUser);
      } else {
        setUserData("No User available");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // getting user from auth
  console.log(auth.currentUser);

  // sign out an existing user
  const signOutUser = () => {
    return signOut(auth);
  };

  const userContext_data = {
    createNewUser,
    signInUser,
    signInUsingGoogle,
    signInUsingGitHub,
    userData,
    signOutUser,
  };

  return (
    <userContext.Provider value={userContext_data}>
      {children}
    </userContext.Provider>
  );
};

export default AuthContext;
AuthContext.propTypes = {
  children: PropTypes.node,
};
