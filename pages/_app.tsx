import "../styles/globals.scss";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", (url) => {
      setTimeout(() => {
        // @ts-ignore
        window.ga("set", document.title, url);
        // @ts-ignore
        window.ga("send", "pageview");
      }, 0);
    });
  }, [router]);
  return <Component {...pageProps} />;
}

export default MyApp;
