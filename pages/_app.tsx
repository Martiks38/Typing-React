import 'styles/globals.scss'

import type { AppProps } from 'next/app'

import Applayout from 'components/Apployout'
import LanguageContextProvider from 'context/Language/LanguageProvider'

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
