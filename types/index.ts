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
  errorPage: string
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
  timePlayed: string
  errors: number
  precision: number
  porcentualErrors: number
}

export type savedResult = {
  wpm: number
  errors: number
  time: string
}

export interface performance {
  wpm: number | null
  time: number
}

export type ChartDataContextProps = {
  performance: performance[]
  clearData: () => void
  newData: (data: performance) => void
}
