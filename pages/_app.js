import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "../styles/globals.css";
import { ModeContextProvider } from "./../store/dark-mode-context";
import Layout from "./../src/components/layout/layout";
import { FilterContextProvider } from "../store/filter-context";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ModeContextProvider>
      <FilterContextProvider>
        <React.Fragment>
          <Head>
            <title>The Zone</title>
            <link
              rel='icon'
              href='./purple-quote.png'
            />
            <meta
              name='viewport'
              content='minimum-scale=1, initial-scale=1, width=device-width'
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </React.Fragment>
      </FilterContextProvider>
    </ModeContextProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
