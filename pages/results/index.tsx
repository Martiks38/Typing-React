import { useEffect, useLayoutEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useTranslations } from 'hooks/useTranslations'
import TableBody from 'components/TableBody'
import type { savedResult } from 'types'

function Results() {
  const [results, setResults] = useState<savedResult[]>()
  const [bestResult, setBestResult] = useState('')
  const [btnUp, setBtnUp] = useState(false)

  const { navHeader, resultsPage } = useTranslations()

  const upPage = () => {
    console.log('Subir')
    window.scrollTo(0, 0)
  }

  useLayoutEffect(() => {
    document.querySelector('.container')?.classList.add('container_viewResults')

    let res = localStorage.getItem('resultsTypingSo')

    if (res) {
      let objRes = JSON.parse(res)

      setResults(objRes)

      let arrWPM: number[] = objRes.map((el: savedResult) => el.wpm)
      let ind = arrWPM.indexOf(Math.max(...arrWPM))

      setBestResult(
        `wpm: ${objRes[ind].wpm} - ${resultsPage.stats[1]}: ${objRes[ind].errors}`
      )
    }

    return () =>
      document
        .querySelector('.container')
        ?.classList.remove('container_viewResults')
  }, [resultsPage])

  useEffect(() => {
    const viewBtn = () => {
      const pageYOffSet = window.scrollY

      pageYOffSet < 1000 ? setBtnUp(false) : setBtnUp(true)
    }

    window.addEventListener('scroll', viewBtn)

    return () => window.removeEventListener('scroll', viewBtn)
  }, [])

  return (
    <>
      <Head>
        <title>{navHeader[2]}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Mira tu progreso a través de los resultados de tus práticas diarias"
        />
        <meta property="og:title" content={navHeader[2]} />
        <meta
          property="og:description"
          content="Mira tu progreso a través de los resultados de tus práticas diarias"
        />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      {results && (
        <>
          <header>
            <h1 className="container__title">{resultsPage.title}</h1>
          </header>
          <p className="results__text">
            {resultsPage.bestResult}: {bestResult}
          </p>
          <div className="container__results">
            {results.map((result, index) => (
              <table key={Date.now() + `${index}`} className="results__table">
                <TableBody results={result} />
              </table>
            ))}
          </div>
          <footer className="footer footer_warning">
            <small>{resultsPage.warningMessage}</small>
          </footer>
        </>
      )}
      {!results && (
        <h1 className="container__title">{resultsPage.withoutResults}</h1>
      )}
      {btnUp && (
        <button className="button button_up" onClick={() => upPage()}>
          <Image
            src="/up.webp"
            alt=""
            aria-label="Ir a la parte superior de la página"
            width={60}
            height={60}
            layout="intrinsic"
            objectFit="contain"
          />
        </button>
      )}
    </>
  )
}

export default Results
