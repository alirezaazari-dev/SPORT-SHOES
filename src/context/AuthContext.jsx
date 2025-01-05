import { createContext, useContext, useEffect, useReducer } from "react";
import { useUser } from "../features/Login/useUser.js";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const initialState = {
  idUser: "09012345678",
  isAuthenticated: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, idUser: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, idUser: null, isAuthenticated: false };
    case "addToShoppingCart":
      return { ...state, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const queryClient = useQueryClient();

  const [{ idUser, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ["user"],
    });
  }, [idUser]);

  function login(idUser) {
    dispatch({ type: "login", payload: idUser });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ idUser, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
