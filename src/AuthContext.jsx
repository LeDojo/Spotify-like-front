import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const login = async (email, password) => {
    setLoading(true);
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    setLoading(false);

    if (data.message === "success") {
      localStorage.setItem("token", data.token);
      setToken(data.token);
    } else {
      console.log(data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: Boolean(token),
        token,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
