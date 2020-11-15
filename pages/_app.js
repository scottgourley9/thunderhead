import { Fragment } from 'react';
import Head from 'next/head';

import Layout from '../components/Layout/Layout';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
    return (
        <Fragment>
            <Head>
                <title>Thunder Head</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Footer />
        </Fragment>
    )
}

export default MyApp
