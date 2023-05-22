import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from '../FireBase/FireBase';


export const AuthContextAPI = createContext({});
const AuthProvder = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // singup user 
    const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

    // update user name and photo 
    const updateUserNamePhoto = (dName, pURL) => {
        return updateProfile(auth.currentUser, {
			displayName: dName,
			photoURL: pURL,
		});
    }

    // current user 
    useEffect(() => {
        const unSubscrib = onAuthStateChanged(auth, (currentUser) =>
        {
            setUser(currentUser)
            setLoading(false)
        }
        )
        
        return () => unSubscrib;
    }, [])
    
    // logout 
    const logOut = () => {
       return signOut(auth)
    }

    // singin 
    const userLogIn = (email, password) => {
        console.log(email, password)
       return signInWithEmailAndPassword(auth, email, password);

    }



    // **************
        // entry related 
    const [enrollmentType, setEnrollmentType] = useState({});
    // **************


    console.log(enrollmentType);




    const authInfo = {
		user,
		loading,
		createUser,
		updateUserNamePhoto,
		logOut,
		userLogIn,
		enrollmentType,
		setEnrollmentType,
	};
    return (
        <AuthContextAPI.Provider value={authInfo}>
            {children}
        </AuthContextAPI.Provider>
    );
};

export default AuthProvder;