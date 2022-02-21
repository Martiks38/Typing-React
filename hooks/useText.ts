import LanguageContext from 'context/Language/LanguageContext'
import { useContext } from 'react'

export function useText() {
  const { texts, handleLanguage } = useContext(LanguageContext)
  const { navHeader, selectLanguage } = texts

  return {
    navHeader,
    selectLanguage,
    handleLanguage
  }
}
