import { Outlet } from "react-router-dom";

const Auth = () => {
	return (
		<>
			<div className="info">This is info</div>
			<Outlet />
		</>
	);
};

export default Auth;
