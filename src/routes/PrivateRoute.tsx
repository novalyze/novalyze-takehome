import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCookie } from "../utils/cookies";
// import { getData } from "../../utils/Crypto";

const PrivateRoute: React.FC = () => {
  const location = useLocation();

  const token: string | undefined = getCookie("token")
console.log(token)
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { PrivateRoute };
