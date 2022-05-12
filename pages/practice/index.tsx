import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useTranslations } from 'hooks/useTranslations'
import randomText from 'utils/randomText'
import DisplayGame from 'components/DisplayGame'

type texts = string[] | null

const Practice = () => {
  const { lang, navHeader } = useTranslations()
  const [texts, setTexts] = useState<texts>(null)

  useEffect(() => {
    window
      .fetch('https://typingso.vercel.app/api/text')
      .then((res) => res.json())
      .then((data) => setTexts(data))
  }, [])

  const text: string = texts !== null ? randomText(texts[lang]) : ''

  return (
    <>
      <Head>
        <title>{navHeader[1]}</title>
        <meta property="og:title" content={navHeader[1]} />
        <meta
          name="description"
          content="Comienza a mejorar tu agilidad al escribir diferentes fragmentos de textos acompañado de Sonic."
        />
        <meta
          property="og:description"
          content="Comienza a mejorar tu agilidad al escribir diferentes fragmentos de textos acompañado de Sonic."
        />
        <meta property="type" content="website" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <DisplayGame text={text} />
    </>
  )
}

export default Practice
