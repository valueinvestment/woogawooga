import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  DataProvider,
  SelectedDataProvider,
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
      <DataProvider>
        <SetDataProvider>
          <SelectedDataProvider>
            <TagProvider>
              <Component {...pageProps} />
            </TagProvider>
          </SelectedDataProvider>
        </SetDataProvider>
      </DataProvider>
    </>
  );
}

export default MyApp;
