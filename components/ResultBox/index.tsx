import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslations } from 'hooks/useTranslations'
import convertMillisecondToMinuteSecond from 'utils/convertMillisecondToMinuteSecond'
import TableBody from 'components/TableBody'
import Loader from 'components/Loader'
import { vars } from 'consts/values'
import { results } from 'types'

const LineGraph = lazy(() => import('components/LineGraph'))

function ResultBox() {
  const router = useRouter()
  const query = router.query

  const [viewPage, setViewPage] = useState(false)
  const [viewResults, setViewResults] = useState(false)
  const [viewGraph, setViewGraph] = useState(false)

  let [wpm, errors, letters, time] = Object.values(query).map((el) =>
    parseInt(el as string)
  )

  const { practiceResults } = useTranslations()

  let results = useMemo<results>(() => {
    let porcentualErrors = Math.floor((errors / letters) * 100)
    let precision = 100 - porcentualErrors
    let timePlayed = convertMillisecondToMinuteSecond(time)

    return {
      wpm,
      precision,
      errors,
      porcentualErrors,
      timePlayed,
    }
  }, [wpm, errors, letters, time])

  useEffect(() => {
    let $container = document.querySelector('.container')

    if ($container) $container.classList.add('container__center')

    return () => {
      if ($container) $container.classList.remove('container__center')
    }
  }, [])

  useEffect(() => {
    let time = setTimeout(() => {
      setViewResults(true)

      let prevResults = localStorage.getItem('resultsTypingSo')

      if (prevResults) {
        let parsePrevResults = JSON.parse(prevResults)

        localStorage.setItem(
          'resultsTypingSo',
          JSON.stringify([
            ...parsePrevResults,
            {
              wpm: results.wpm,
              errors: results.errors,
              time: results.timePlayed,
            },
          ])
        )
      } else {
        localStorage.setItem(
          'resultsTypingSo',
          JSON.stringify([
            {
              wpm: results.wpm,
              errors: results.errors,
              time: results.timePlayed,
            },
          ])
        )
      }
    }, 1300)

    return () => clearTimeout(time)
  }, [results])

  useEffect(() => {
    let validate = true
    if (Object.keys(query).length !== 0) {
      vars.forEach((variable) => {
        if (!query.hasOwnProperty(variable)) {
          router.push('/practice')
          validate = false
        }
      })
      Object.values(query).forEach((el) => {
        let isNumber = parseInt(el as string)
        if (Number.isNaN(isNumber) || isNumber < 0) {
          router.push('/practice')
          validate = false
        }
      })

      if (validate) setViewPage(true)
    }

    let time = setTimeout(() => {
      if (!document.querySelector('.resultBox__data_noView'))
        router.push('/practice')
    }, 400)

    return () => clearTimeout(time)
  }, [query, router])

  return (
    <>
      {viewPage && (
        <div
          className={
            !viewResults ? 'resultBox resultBox_animation' : 'resultBox'
          }
        >
          <h1 className="resultBox__title">{practiceResults.title}</h1>
          <div className="resultBox__data">
            {viewGraph && (
              <Suspense
                fallback={
                  <div className="canvas">
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
                className={!viewResults ? '' : 'button button_replay_view'}
                onClick={() => setViewGraph(true)}
              >
                Ver gráfico
              </button>
            )}
            <Link href="/practice">
              <a
                className={
                  !viewResults ? '' : 'button button_replay button_replay_view'
                }
              >
                {practiceResults.playAgain}
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default ResultBox
