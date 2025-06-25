import { useEffect, useState, Fragment } from "react";
import Head from "next/head";
import Preloader from "@/src/components/Preloader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Yuldashev - Portfolio</title>
      </Head>
      {isLoading ? <Preloader /> : <Component {...pageProps} />}
    </Fragment>
  );
}
