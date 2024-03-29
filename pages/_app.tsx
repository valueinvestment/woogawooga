import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DataProvider, SearchDataProvider, SetDataProvider, TagProvider } from "../context/DataContext";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "../components/Footer";
import * as gtag from '../lib/gtag';
import Script from 'next/script';

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
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `
        }}
      />
      <DataProvider>
        <SetDataProvider>
          <SearchDataProvider>
            <TagProvider>
              <Component {...pageProps} />
            </TagProvider>
          </SearchDataProvider>
        </SetDataProvider>
      </DataProvider>
      <Analytics />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
