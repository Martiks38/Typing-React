import { ChangeEvent, lazy, Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'hooks/useTranslations'
import TableBody from 'components/TableBody'
import Loader from 'components/Loader'
import type { results } from 'types'

const LineGraph = lazy(() => import('components/LineGraph'))

function ResultBox() {
  const [viewResults, setViewResults] = useState(false)
  const [viewGraph, setViewGraph] = useState(false)
  const [results, setResults] = useState<results>({} as results)

  const { practiceResults } = useTranslations()

  useEffect(() => {
    let $container = document.querySelector('.container')

    let temp = sessionStorage.getItem('resultTemp')

    let time = setTimeout(() => {
      setViewResults(true)
    }, 1300)

    if ($container) $container.classList.add('container__center')
    if (temp) setResults(JSON.parse(temp))

    return () => {
      if ($container) $container.classList.remove('container__center')
      clearTimeout(time)
    }
  }, [])

  useEffect(() => {
    const focusResultbox = () => {
      const width = window.innerWidth

      if (width <= 900) window.scrollTo(0, 100)
    }

    if (viewGraph) {
      window.addEventListener('resize', focusResultbox)
    }
    return () => window.removeEventListener('resize', focusResultbox)
  }, [viewGraph])

  return (
    <>
      <div
        className={!viewResults ? 'resultBox resultBox_animation' : 'resultBox'}
      >
        <h1 className="resultBox__title">{practiceResults.title}</h1>
        <div className="resultBox__data">
          {viewGraph && (
            <Suspense
              fallback={
                <div className="canvas__svg">
                  <Loader />
                </div>
              }
            >
              <div className="canvas">
                <LineGraph />
              </div>
            </Suspense>
          )}
          <table
            className={
              !viewResults ? 'resultBox__data_noView' : 'resultBox__data_view'
            }
          >
            <TableBody results={results} />
          </table>
        </div>
        <div
          className={
            !viewResults ? 'panelButton panelButton_noView' : 'panelButton'
          }
        >
          {!viewGraph && (
            <button
              className={!viewResults ? '' : 'button button_replay'}
              onClick={() => setViewGraph(true)}
            >
              Ver gráfico
            </button>
          )}
          <Link href="/practice">
            <a
              className={
                !viewResults
                  ? ''
                  : !viewGraph
                  ? 'button button_replay button_replay'
                  : 'button button_replay button_replay_noView'
              }
            >
              {practiceResults.playAgain}
            </a>
          </Link>
        </div>
        {viewGraph && (
          <Link href="/practice">
            <a
              className={
                !viewResults ? '' : 'button button_replay button_replay_icon'
              }
            >
              <Image
                src="/reload.webp"
                alt="Volver a jugar"
                width={100}
                height={100}
                layout="intrinsic"
                objectFit="contain"
              />
            </a>
          </Link>
        )}
      </div>
    </>
  )
}

export default ResultBox
