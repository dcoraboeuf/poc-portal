import '@styles/globals.css'
import MainLayout from "@components/MainLayout";

function Application({Component, pageProps}) {
    return (
        <>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    )
}

export default Application
