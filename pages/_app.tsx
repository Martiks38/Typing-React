import 'styles/globals.scss'

import type { AppProps } from 'next/app'
import Applayout from 'components/Apployout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Applayout title="Home">
      <Component {...pageProps} />
    </Applayout>
  )
}

export default MyApp
