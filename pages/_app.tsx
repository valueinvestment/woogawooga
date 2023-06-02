import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CardDataProvider, SearchDataProvider, SetDataProvider, TagProvider } from "../context/DataContext";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="/fonts/NanumSquareNeoTTF-bRg.woff2" rel="preload" as="font" type="font/woff2" />
        <title>우가? 우가!</title>
        <meta property="og:title" content="우가?우가!" key="title" />
        <meta property="og:description" content="자세가 솔루션이다" key="description" />
        <meta property="og:url" content="https://www.oogaooga.app/" />
        <meta property="og:image" content="/assets/forshareimg.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardDataProvider>
        <SetDataProvider>
          <SearchDataProvider>
            <TagProvider>
              <Component {...pageProps} />
            </TagProvider>
          </SearchDataProvider>
        </SetDataProvider>
      </CardDataProvider>
      <Analytics />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
