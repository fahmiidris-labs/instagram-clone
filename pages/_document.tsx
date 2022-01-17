import NextDocument, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript
} from 'next/document';

//   import { Favicon } from '@/components/favicon';

export default class Document extends NextDocument {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await NextDocument.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html
                lang="en"
                className={`[--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]`}
            >
                <Head>
                    {/* <Favicon /> */}
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Rochester&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="font-sans antialiased text-gray-700">
                    <Main />
                    <NextScript />
                    <script></script>
                </body>
            </Html>
        );
    }
}
