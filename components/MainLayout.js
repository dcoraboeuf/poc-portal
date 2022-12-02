import Head from "next/head";
import Footer from "@components/Footer";

export default function MainLayout({children}) {
    return (
        <>
            <div className="container">
                <Head>
                    <title>Ontrack Customer Portal</title>
                </Head>

                <main className="p-6">
                    {children}
                </main>

                <Footer/>
            </div>
        </>
    )
}