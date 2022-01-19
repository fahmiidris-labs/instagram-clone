import '@/assets/css/main.css';

import Head from 'next/head';
import { Fragment } from 'react';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';

import { Title } from '@/components/title';

import socialCardLarge from '@/assets/images/social-card-large.png';

import type { AppPropsWithLayout } from '@/types/app.type';
import { AuthProvider } from '@/context/AuthContext';

const progress = new ProgressBar({
    size: 2,
    color: '#06b6d4',
    className: 'bar-of-progress',
    delay: 100
});

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
    progress.start();
    progress.finish();
}

Router.events.on('routeChangeStart', () => progress.start());
Router.events.on('routeChangeComplete', () => progress.finish());
Router.events.on('routeChangeError', () => progress.finish());

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayout) => {
    const Layout = Component.layoutProps?.Layout || Fragment;
    const layoutProps = Component.layoutProps?.Layout
        ? { layoutProps: Component.layoutProps }
        : {};
    const meta = Component.layoutProps?.meta || {};
    const description =
        meta.metaDescription ||
        meta.description ||
        'Instagram Clone from Fahmi Idris.';

    return (
        <>
            <Title suffix="Instagram Clone">
                {meta.metaTitle || meta.title}
            </Title>
            <Head>
                <meta
                    key="twitter:card"
                    name="twitter:card"
                    content="summary_large_image"
                />
                <meta
                    key="twitter:site"
                    name="twitter:site"
                    content="@FahmiIdrisA"
                />
                <meta
                    key="twitter:description"
                    name="twitter:description"
                    content={description}
                />
                <meta
                    key="twitter:image"
                    name="twitter:image"
                    content={`https://f-instagram-clone.vercel.app${socialCardLarge}`}
                />
                <meta
                    key="twitter:creator"
                    name="twitter:creator"
                    content="@FahmiIdrisA"
                />
                <meta
                    key="og:url"
                    property="og:url"
                    content={`https://f-instagram-clone.vercel.app${router.pathname}`}
                />
                <meta key="og:type" property="og:type" content="article" />
                <meta
                    key="og:description"
                    property="og:description"
                    content={description}
                />
                <meta
                    key="og:image"
                    property="og:image"
                    content={`https://f-instagram-clone.vercel.app${socialCardLarge}`}
                />
            </Head>
            <AuthProvider>
                <Layout {...layoutProps}>
                    <Component {...pageProps} />
                </Layout>
            </AuthProvider>
        </>
    );
};

export default MyApp;
