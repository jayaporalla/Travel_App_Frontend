import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const initialValue = {
    isAuthModalOpen: false,
    username: "",
    name: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
    selectedTab: "login",
    accessToken: ""
}

const AuthContext = createContext(initialValue);

const AuthProvider = ({children}) => {

    const [{ isAuthModalOpen, username, name, number, email, password, confirmPassword, selectedTab, accessToken}, authDispatch] = useReducer(authReducer, initialValue);

    return (
        <AuthContext.Provider value={{isAuthModalOpen, username, name, number, email, password, confirmPassword, selectedTab, accessToken, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };