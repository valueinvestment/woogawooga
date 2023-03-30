import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  CardDataProvider,
  SearchDataProvider,
  SetDataProvider,
  TagProvider,
} from "../context/DataContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>우가? 우가!</title>
        <meta property="og:title" content="우가우가" key="title" />
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
    </>
  );
}

export default MyApp;
