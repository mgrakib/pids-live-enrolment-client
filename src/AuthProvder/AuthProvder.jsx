import  { createContext, useState } from 'react';

export const AuthContextAPI = createContext({});
const AuthProvder = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const authInfo = { user, loading };
    return (
        <AuthContextAPI.Provider value={authInfo}>
            {children}
        </AuthContextAPI.Provider>
    );
};

export default AuthProvder;