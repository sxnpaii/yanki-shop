import '../styles/globals.scss';

import Head from 'next/head';
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Bootstrap css */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        {/* remixicon */}
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        {/* icon */}
        <link rel="icon" href="/YANKI.svg" />

      </Head>


      <Component {...pageProps} />

      {/* bootstrap js */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></Script>
    </>

  )
}

export default MyApp;
