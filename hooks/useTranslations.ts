import { useContext } from 'react'
import LanguageContext from 'context/Language/LanguageContext'
import { LanguageContextProps } from 'types'

export function useTranslations() {
  const { lang, texts, handleLanguage } =
    useContext<LanguageContextProps>(LanguageContext)
  const { navHeader, selectLanguage, home, resultsPage, practiceResults } =
    texts

  return {
    handleLanguage,
    home,
    lang,
    navHeader,
    practiceResults,
    resultsPage,
    selectLanguage,
  }
}
