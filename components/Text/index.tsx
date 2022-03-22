import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { usePerformanceData } from 'hooks/usePerformanceData'
import { useTranslations } from 'hooks/useTranslations'
import createPerformance from 'utils/createPerformance'
import highlightedWord from 'utils/highlightedWord'
import convertMillisecondToMinuteSecond from 'utils/convertMillisecondToMinuteSecond'
import type { ChangeInput } from 'types'

function Text({ text, isPlay, setIsPlay, setVelocity }) {
  const [wordInput, setWordInput] = useState('')
  const [temporizador, setTemporizador] = useState(0)
  const [errors, setErrors] = useState(0)
  const [indWrittenWord, setIndWrittenWord] = useState(0)
  const [wpm, setWPM] = useState(0)
  const [inputError, setInputError] = useState(false)
  const [blurText, setBlurText] = useState(true)

  const router = useRouter()

  const { lang } = useTranslations()

  const { performance, clearData, newData } = usePerformanceData()

  const inputRef = useRef<HTMLInputElement>(null)
  const textRef = useRef('')
  const timeInGame = useRef(0)
  const data = useRef(createPerformance(0, 0))

  const textSplit = useMemo(() => text.split(' '), [text])

  let { first, second, last } = useMemo(() => {
    return {
      first:
        indWrittenWord === 0
          ? ''
          : textSplit.slice(0, indWrittenWord).join(' ') + ' ',
      second: textSplit[indWrittenWord],
      last:
        indWrittenWord !== textSplit.length - 1
          ? ' ' + textSplit.slice(indWrittenWord + 1).join(' ')
          : '',
    }
  }, [textSplit, indWrittenWord])

  useEffect(() => {
    let start = setTimeout(() => {
      setBlurText(false)
      setTemporizador(Date.now())
      inputRef.current?.focus()
    }, 3000)

    return () => clearTimeout(start)
  }, [])

  useEffect(() => {
    let time = setInterval(() => {
      if (data.current.wpm !== 0) newData(data.current)
    }, 3000)

    return () => clearInterval(time)
  }, [newData])

  useEffect(() => {
    setBlurText(true)
  }, [lang])

  useEffect(() => {
    textRef.current = highlightedWord(text, indWrittenWord)
    timeInGame.current = Date.now() - temporizador

    let timer = setInterval(() => {
      setWPM(Math.floor((indWrittenWord * 60000) / timeInGame.current))
    }, 10)

    return () => {
      clearInterval(timer)
    }
  }, [indWrittenWord, text, temporizador])

  useEffect(() => {
    const $sonic: HTMLElement | null = document.querySelector('.imageSonic')
    const $fondo: HTMLElement | null =
      document.querySelector('.container__fondo')

    if ($sonic && $fondo) {
      const pathLength = $fondo.clientWidth - $sonic.clientWidth

      $sonic.style.transform = `translate(${
        indWrittenWord * (pathLength / textSplit.length)
      }px, 0)`
    }
  }, [indWrittenWord, textSplit, wpm])

  const handleWordIsCorrect: ChangeInput = (event) => {
    let value = event.target.value

    setWordInput(value)

    if (!isPlay) {
      setIsPlay(true)
      clearData()
    }

    if (
      !value.endsWith(textSplit[indWrittenWord]) ||
      indWrittenWord < textSplit.length - 1
    ) {
      if (value.endsWith(textSplit[indWrittenWord] + ' ')) {
        setIndWrittenWord(indWrittenWord + 1)
        setWordInput('')
      } else {
        if (!textSplit[indWrittenWord].startsWith(value)) {
          if (!inputError) setErrors(errors + 1)
          setInputError(true)
        } else {
          setInputError(false)
        }
      }
    } else {
      if (performance[performance.length - 1].time !== data.current.time)
        newData(data.current)

      let prevResults = localStorage.getItem('resultsTypingSo')

      let timeString = convertMillisecondToMinuteSecond(timeInGame.current)

      let porcentualErrors = Math.floor((errors / text.split('').length) * 100)

      sessionStorage.setItem(
        'resultTemp',
        JSON.stringify({
          wpm,
          timePlayed: timeString,
          errors,
          porcentualErrors,
          precision: 100 - porcentualErrors,
        })
      )

      if (prevResults) {
        let parsePrevResults = JSON.parse(prevResults)

        localStorage.setItem(
          'resultsTypingSo',
          JSON.stringify([
            ...parsePrevResults,
            {
              wpm,
              time: timeString,
              errors,
            },
          ])
        )
      } else {
        localStorage.setItem(
          'resultsTypingSo',
          JSON.stringify([
            {
              wpm,
              time: timeString,
              errors,
            },
          ])
        )
      }

      router.push('/practice/result')
    }

    data.current = createPerformance(wpm, timeInGame.current)
    setVelocity(wpm)
  }

  return (
    <>
      <div className="practiceText">
        <p
          className={
            blurText
              ? 'practiceText__text practiceText__text_blur'
              : 'practiceText__text'
          }
        >
          <span>{first}</span>
          <span className="practiceText__highlighredWord">{second}</span>
          <span>{last}</span>
        </p>
        <input
          autoComplete="off"
          type="text"
          name="word"
          value={wordInput}
          disabled={blurText}
          aria-label={
            blurText ? 'El juego comienza en 3 segundos' : 'Comience a escribir'
          }
          onChange={handleWordIsCorrect}
          className={inputError ? 'textInput textInput_wrongWord' : 'textInput'}
          ref={inputRef}
        />
        <span>{wpm} wpm</span>
      </div>
    </>
  )
}

export default Text
