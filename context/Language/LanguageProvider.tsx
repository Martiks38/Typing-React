import { useState, useEffect } from 'react'
import LanguageContext from './LanguageContext'
import { translations } from 'consts/translations'
import { LANGUAGE_DEFAULT } from 'consts/values'
import { ContentOfComponents, props } from 'types'

function LanguageContextProvider({ children }: props) {
  const [lang, setLang] = useState(LANGUAGE_DEFAULT)
  const [texts, setTexts] = useState<ContentOfComponents>(translations[lang])

  useEffect(() => {
    let lang = localStorage.getItem('lang')
    if (lang) {
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

    if (window.location.pathname === '/practice') location.reload()
  }

  return (
    <LanguageContext.Provider value={{ lang, texts, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider
