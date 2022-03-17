import { createContext } from 'react'
import { LanguageContextProps } from 'types'

const LanguageContext = createContext<LanguageContextProps>(
  {} as LanguageContextProps
)

export default LanguageContext
