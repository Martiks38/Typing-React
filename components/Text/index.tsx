import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslations } from 'hooks/useTranslations'
import highlightedWord from 'utils/highlightedWord'
import type { ChangeInput, performance } from 'types'

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

  const inputRef = useRef<HTMLInputElement>(null)
  const textRef = useRef('')
  const time = useRef(0)
  const performance: { current: performance[] } = useRef([
    { wpm: null, time: 0 },
  ])
  const data = useRef<performance>({ wpm: 0, time: 0 })

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

    let time = setInterval(() => {
      if (data.current.wpm !== 0)
        performance.current = [...performance.current, data.current]
    }, 3000)

    return () => {
      clearTimeout(start)
      clearInterval(time)
    }
  }, [])

  useEffect(() => {
    setBlurText(true)
  }, [lang])

  useEffect(() => {
    textRef.current = highlightedWord(text, indWrittenWord)
    time.current = Date.now() - temporizador

    let timer = setInterval(() => {
      setWPM(Math.floor((indWrittenWord * 60000) / time.current))
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
      let query = `&wpm=${wpm}&errors=${errors}&letters=${
        text.split('').length
      }&time=${time.current}`

      performance.current = [...performance.current, ...[data.current]]

      setTimeout(() => {
        sessionStorage.setItem(
          'resultTemp',
          JSON.stringify(performance.current)
        )
        router.push({
          pathname: '/practice/result',
          query,
        })
      }, 10)
    }
    data.current = { wpm, time: time.current }
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
