import Head from 'next/head'
import Footer from '@components/Footer'
import MainButtonBar from '@components/MainButtonBar'
import LoginButton from '@components/LoginButton'
import SignupButton from "@components/SignupButton";
import Header from "@components/Header";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Ontrack Customer Portal</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
            </Head>

            <main>
                <Header text="Welcome to the Ontrack Customer Portal!"/>
                <MainButtonBar>
                    <LoginButton/>
                    <SignupButton/>
                </MainButtonBar>
                <script type="text/javascript"
                        src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </main>

            <Footer/>
        </div>
    )
}
