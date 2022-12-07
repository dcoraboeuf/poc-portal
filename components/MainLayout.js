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

                {/*<div className="container">*/}
                {/*    <header className="p-3 text-bg-dark">*/}
                {/*        <div*/}
                {/*            className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">*/}
                {/*            <a href="/"*/}
                {/*               className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">*/}
                {/*                <img src="/ontrack-128.png" alt="Ontrack Logo" className="ot-icon"/>*/}
                {/*                <span className="fs-4 ps-4">Ontrack Customer Portal</span>*/}
                {/*            </a>*/}
                {/*            <div className="text-end">*/}
                {/*                <button type="button" className="btn btn-outline-light me-2">Login</button>*/}
                {/*                <button type="button" className="btn btn-warning">Sign-up</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </header>*/}
                {/*</div>*/}

                {/*<main>*/}
                {/*    {children}*/}
                {/*</main>*/}

                {/*<Footer/>*/}
            </div>
        </>
    )
}