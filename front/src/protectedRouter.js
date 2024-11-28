import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/auth.context";


export const ProtectedRoute = () => {
  const { isAuth, loading } = useAuth();

  if (loading) return <strong >Cargando</strong>;

  if (!isAuth && !loading) return <Navigate to="/login" replace />;

  return <Outlet />;
};