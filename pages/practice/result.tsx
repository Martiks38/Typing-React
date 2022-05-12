import Head from 'next/head'
import ResultBox from 'components/ResultBox'
import { useTranslations } from 'hooks/useTranslations'

function Result() {
  const { practiceResults } = useTranslations()

  return (
    <>
      <Head>
        <title>{practiceResults.title}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content={practiceResults.title} />
        <meta property="og:description" content="Resultado de la partida" />
        <meta property="og:type" content="website" />
      </Head>
      <ResultBox />
    </>
  )
}

export default Result
