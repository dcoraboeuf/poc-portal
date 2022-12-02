import '@styles/globals.css'
import MainLayout from "@components/MainLayout";

function Application({Component, pageProps}) {
    return (
        <>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>

            <script type="text/javascript"
                    src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </>
    )
}

export default Application
