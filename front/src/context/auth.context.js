import { createContext, useState, useContext, useEffect } from "react";
import {
  LoginRequest,
  LogoutRequest,
  verifyTokenRequest
} from "../services/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);


  const signIn = async (values) => {
    try {
      const res = await LoginRequest(values);
      setUser(res.data);
      setIsAuth(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const logout = async () => {
    try {
      await LogoutRequest();
      setUser(null);
      setIsAuth(false);
    } catch (error) {
      console.log("error")
      console.log(error);
      setErrors(error.response.data);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const time = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(time);
    }
  }, [errors]);

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuth(false);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) return setIsAuth(false);
        setIsAuth(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuth(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);


  

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        errors,
        loading,
        signIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// AuthProvider.propTypes = {
//   children: PropTypes.node,
// };