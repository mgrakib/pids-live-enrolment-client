import { useContext } from "react";
import { AuthContextAPI } from "../AuthProvder/AuthProvder";
import { Navigate } from "react-router-dom";
import Lottie from "lottie-react";
import lodding from "../../public/loading.json";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContextAPI);
  
    if (loading) {
        return (
			<p>
				<Lottie
					animationData={lodding}
					loop={true}
		
				/>
			</p>
		);
  }
  
		if (user) {
			return children;
		}

    return <Navigate to={"/login"} />;
};

export default PrivateRoute;