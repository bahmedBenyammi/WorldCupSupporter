import '../styles/globals.css'
import type { AppProps } from 'next/app'

import BottomPage from "../components/BottomPage";


function MyApp({ Component, pageProps }: AppProps) {

  return <div >
    <Component {...pageProps} />
    <BottomPage/>

    </div>
}

export default MyApp
