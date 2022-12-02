import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Ontrack Customer Portal</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
            </Head>

            <main className="container">
                <Header title="Welcome to the Ontrack Customer Portal!"/>
            </main>

            <Footer/>
        </div>
    )
}
