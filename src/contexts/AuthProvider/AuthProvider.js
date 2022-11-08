import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const CreateUserWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogInWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    
    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const LogOut = () => {
        return signOut();
    }

    const authInfo = {
        CreateUserWithEmailAndPassword,
        LogInWithEmailAndPassword,
        user,
        loading,
        setUser,
        GoogleLogin,
        LogOut
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;