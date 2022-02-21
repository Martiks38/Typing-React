import Head from 'next/head'

import Header from 'components/Header'
import Main from 'components/Main'

function Applayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#033397" />
        <meta
          name="description"
          content="Juego online de mecanografía. Con una gran variedad textos para practicar e ir poniendo a prueba tus límites."
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default Applayout
