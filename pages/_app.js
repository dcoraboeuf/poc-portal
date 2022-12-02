import '@styles/globals.css'
import MainLayout from "@components/MainLayout";
import AuthContextProvider from "../contexts/authContext";

function Application({Component, pageProps}) {
    return (
        <AuthContextProvider>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </AuthContextProvider>
    )
}

export default Application
