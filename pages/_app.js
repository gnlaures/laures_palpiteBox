import React from "react";
import '../css/styles.css'
import Layout from '../components/layout'

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps}></Component>
        </Layout>
    )
}

export default MyApp