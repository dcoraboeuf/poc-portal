import '@styles/globals.css'
import MainLayout from "@components/MainLayout";
import AuthContextProvider from "../contexts/authContext";
import EnvContextProvider from "../contexts/envContext";

function Application({Component, pageProps}) {
    return (
        <EnvContextProvider>
            <AuthContextProvider>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </AuthContextProvider>
        </EnvContextProvider>
    )
}

export default Application
