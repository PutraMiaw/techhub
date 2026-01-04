import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const RequireAdmin = ({ children }) => {
  const { isAdmin, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated || !isAdmin) {
    // Redirect ke login admin, ingat dari mana dia nyasar
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;
