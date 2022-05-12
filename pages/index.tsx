import Head from 'next/head'
import { useTranslations } from 'hooks/useTranslations'
import Animation from 'components/Animation'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { home } = useTranslations()

  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Juego online de mecanografía. Con una gran variedad textos para practicar e ir poniendo a prueba tus límites."
        />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="Juego online de mecanografía. Con una gran variedad textos para practicar e ir poniendo a prueba tus límites."
        />
        <meta property="og:type" content="website" />
      </Head>
      <h1 className="container__title container__title_color">{home.title}</h1>
      <Animation />
    </>
  )
}

export default Home
