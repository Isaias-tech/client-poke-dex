import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const AuthProvider = () => {
	const isAuthorized = Cookies.get("authorized");

	if (!isAuthorized) {
		return <Navigate to="/sign-in" />;
	}
	return <Outlet />;
};

export default AuthProvider;
