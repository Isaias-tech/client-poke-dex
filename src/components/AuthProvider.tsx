import { Navigate, Outlet } from "react-router-dom";

const AuthProvider = ({ authenticated }: { authenticated: boolean }) => {
	if (!authenticated) {
		return <Navigate to="/sign-in" />;
	}
	return <Outlet />;
};

export default AuthProvider;
