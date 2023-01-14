import {createContext, useEffect, useState} from "react";

export const EnvContext = createContext({
    domain: null,
});

const EnvContextProvider = ({children}) => {
    const [env, setEnv] = useState({
        domain: null
    });
    useEffect(() => {
        async function getEnvironment() {
            const res = await fetch('/.netlify/functions/netlify-get-env');
            if (res.ok) {
                const data = await res.json();
                setEnv(data);
            } else {
                throw new Error(`Failed to fetch the Netlify environment (code = ${res.status}).`);
            }
        }

        // noinspection JSIgnoredPromiseFromCall
        getEnvironment();
    }, []);

    return <EnvContext.Provider value={env}>{children}</EnvContext.Provider>
};

export default EnvContextProvider;
