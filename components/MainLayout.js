import Head from "next/head";
import Footer from "@components/Footer";

export default function MainLayout({children}) {
    return (
        <>
            <div>
                <Head>
                    <title>Ontrack Customer Portal</title>
                </Head>

                <main>
                    {children}
                </main>

                <Footer/>
            </div>
        </>
    )
}