import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "./components/layout";
import Script from "next/script";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { SSRProvider } from "@react-aria/ssr";
config.autoAddCss = false;

function GlobalApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="In Evolve Global Solutions we specialize in Business and IT consulting, with our expert and professional team we can provide amazing solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Evolve Global Solutions</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://kit.fontawesome.com/13ae3f0571.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/popper.min.js" strategy="beforeInteractive" />
      </Head>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </>
  );
}

export default GlobalApp;
