import Head from "next/head";
import Footer from "@components/Footer";

export default function MainLayout({children}) {
    return (
        <>
            <div className="container">
                <Head>
                    <title>Ontrack Customer Portal</title>
                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
                </Head>

                <main className="p-6">
                    {children}
                </main>

                <Footer/>
            </div>
        </>
    )
}