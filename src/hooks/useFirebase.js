import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../Firebase/firebase.init";

firebaseInit();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
    }
    const logout = () => {
        signOut(auth).then(() => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])
    return {
        user,
        googleSignIn,
        logout
    }

}

export default useFirebase;