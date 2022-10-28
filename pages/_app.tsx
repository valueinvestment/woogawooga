import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  DataProvider,
  SelectedDataProvider,
  TagProvider,
} from "../context/DataContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DataProvider>
        <SelectedDataProvider>
          <TagProvider>
            <Component {...pageProps} />
          </TagProvider>
        </SelectedDataProvider>
      </DataProvider>
    </>
  );
}

export default MyApp;
