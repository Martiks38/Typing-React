import { useState, useEffect } from 'react'
import LanguageContext from './LanguageContext'
import {
  ContentOfComponents,
  translations,
  LANGUAGE_DEFAULT
} from 'consts/translations'

interface ContextProps {
  children: JSX.Element | JSX.Element[]
}

function LanguageContextProvider({ children }: ContextProps) {
  const [lang, setLang] = useState(LANGUAGE_DEFAULT)
  const [texts, setTexts] = useState<ContentOfComponents>(translations[lang])

  useEffect(() => {
    let lang = localStorage.getItem('lang')
    if (lang !== null) {
      setLang(lang)
      setTexts(translations[lang])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setLang(value)
    setTexts(translations[value])
  }

  return (
    <LanguageContext.Provider value={{ texts, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider
