import { createContext, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

export const AuthContext = createContext({
    user: null,
    login: () => {
    },
    logout: () => {
    },
    authReady: false,
});

const AuthContextProvider = ({children}) => {
    useEffect(() => {
        netlifyIdentity.init();
    }, []);
    return <AuthContext.Provider value="">{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
