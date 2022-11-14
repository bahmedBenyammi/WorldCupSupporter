import '../styles/globals.css'
import type { AppProps } from 'next/app'

import BottomPage from "../components/BottomPage";
import Script from "next/script";


function MyApp({ Component, pageProps }: AppProps) {

  return<>
    <Script strategy="afterInteractive"  async src="https://www.googletagmanager.com/gtag/js?id=G-4QXLZBF9CQ"/>
    <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4QXLZBF9CQ', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
  <div >
    <Component {...pageProps} />
    <BottomPage/>

    </div ></>
}

export default MyApp
