import Head from 'next/head'
import Page from '@components/Page'
import Footer from '@components/Footer'
import MainButtonBar from '@components/MainButtonBar'
import MainButton from '@components/MainButton'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Ontrack Customer Portal</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
            </Head>

            <main>
                <Page title="Welcome to the Ontrack Customer Portal!">
                    <MainButtonBar>
                        <MainButton title="Login"/>
                        <MainButton title="Signup"/>
                    </MainButtonBar>
                </Page>
            </main>

            <Footer/>
        </div>
    )
}
