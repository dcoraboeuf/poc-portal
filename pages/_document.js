import {Html, Head, Main, NextScript} from 'next/document'
import Netlify from "@components/Netlify";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            <Netlify/>
            </body>
        </Html>
    )
}
