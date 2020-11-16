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
                <link rel="icon" href="/thunder.ico" />
                <meta name="description" content="Help Businesses to grow by providing software and services that will help to generate leads, get better reviews, get better rankings, market their business, create text campaigns, implement SEO, design websites, and provide automated customer interactive software" />
                <meta name="keywords" content="Lead Generation, Better Reviews, Better Rankings, Marketing, Text Campaign, Search Engine Optimization, SEO, Web Design, Automated Customer Interactive Software" />
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
