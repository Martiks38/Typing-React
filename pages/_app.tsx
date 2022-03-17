import type { AppProps } from 'next/app'
import LanguageContextProvider from 'context/Language/LanguageProvider'
import Applayout from 'layout/Apployout'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageContextProvider>
      <Applayout>
        <Component {...pageProps} />
      </Applayout>
    </LanguageContextProvider>
  )
}

export default MyApp
