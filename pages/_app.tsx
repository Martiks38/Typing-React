import type { AppProps } from 'next/app'
import LanguageContextProvider from 'context/Language/LanguageProvider'
import Applayout from 'layout/Apployout'
import 'styles/globals.scss'
import ChartDataProvider from 'context/ChartData/ChartDataProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageContextProvider>
      <ChartDataProvider>
        <Applayout>
          <Component {...pageProps} />
        </Applayout>
      </ChartDataProvider>
    </LanguageContextProvider>
  )
}

export default MyApp
