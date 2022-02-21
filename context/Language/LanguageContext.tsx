import { createContext } from 'react'
import { ContentOfComponents } from '../../consts/translations'

type LanguageContextProps = {
  texts: ContentOfComponents
  handleLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const LanguageContext = createContext<LanguageContextProps>(
  {} as LanguageContextProps
)

export default LanguageContext
