import Head from "next/head";
import Footer from "@components/Footer";
import ConnectionBar from "@components/ConnectionBar";

export default function MainLayout({children}) {
    return (
        <>
            <div>
                <Head>
                    <title>Ontrack Customer Portal</title>
                </Head>

                <nav className="navbar bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="/ontrack-128.png" alt="Ontrack logo" className="ot-icon"/>
                            <span className="ps-4 text-light">Ontrack Customer Portal</span>
                        </a>
                        <form className="d-flex" role="connection">
                            <ConnectionBar/>
                        </form>
                    </div>
                </nav>

                <main>
                    {children}
                </main>
            </div>
        </>
    )
}