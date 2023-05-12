import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // check user is present or not
    useEffect(() => {
        const unsubscribe= onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            // console.log(currentUser);
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    // login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;