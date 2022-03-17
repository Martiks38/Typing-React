export type ChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => void

export type props = {
  children: JSX.Element | JSX.Element[]
}

export type ContentOfComponents = {
  navHeader: string[]
  selectLanguage: { es: string; en: string; it: string }
  home: { title: string; play: string }
  practiceResults: {
    title: string
    stats: string[]
    playAgain: string
  }
  resultsPage: {
    title: string
    bestResult: string
    viewGraph: string
    stats: string[]
    withoutResults: string
    warningMessage: string
  }
}

export type LanguageContextProps = {
  lang: string
  texts: ContentOfComponents
  handleLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export type translate = {
  es: ContentOfComponents
  en: ContentOfComponents
  it: ContentOfComponents
}

export type results = {
  wpm: number
  precision: number
  errors: number
  porcentualErrors: number
  timePlayed: string
}

export type savedResult = {
  wpm: number
  errors: number
  time: string
}

export type performance = {
  wpm: number | null
  time: number
}
