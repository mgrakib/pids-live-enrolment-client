import { useContext } from "react";
import { AuthContextAPI } from "../AuthProvder/AuthProvder";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContextAPI);
    if (loading) {
        return <p>Loading...</p>
    }
		if (user) {
			return children;
		}

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;