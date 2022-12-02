import {createContext, useEffect, useState} from "react";
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
    const [user, setUser] = useState(null);
    useEffect(() => {
        // on login
        netlifyIdentity.on("login", (user) => {
            setUser(user);
            netlifyIdentity.close();
        });

        // on logout
        netlifyIdentity.on("logout", (user) => {
            setUser(null);
        });

        // on init
        netlifyIdentity.init();
    }, []);

    const login = () => {
        netlifyIdentity.open("login");
    };

    const logout = () => {
        netlifyIdentity.logout();
    };

    const signup = () => {
        netlifyIdentity.open("signup");
    };

    const context = {
        login,
        signup,
        logout,
        user,
    };

    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
