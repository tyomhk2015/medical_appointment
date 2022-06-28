import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {RecoilRoot} from 'recoil'
import Header from './components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <div className={`min-h-[100vh] bg-gray-300 pt-20 px-5`}>
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  )
}

export default MyApp
