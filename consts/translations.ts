export type ContentOfComponents = {
  navHeader: string[]
  selectLanguage: { es: string; en: string; it: string }
}

interface trans {
  es: ContentOfComponents
  en: ContentOfComponents
  it: ContentOfComponents
}

export const LANGUAGE_DEFAULT = 'es'

export const translations: trans = {
  es: {
    navHeader: ['Inicio', 'Practicar', 'Resultados', 'Comentarios'],
    selectLanguage: {
      es: 'Español 🇪🇸',
      en: 'Inglés 🇺🇸',
      it: 'Italiano 🇮🇹'
    }
  },
  en: {
    navHeader: ['Home', 'Practice', 'Results', 'Feedback'],
    selectLanguage: {
      en: 'English 🇺🇸',
      es: 'Spanish 🇪🇸',
      it: 'Italian 🇮🇹'
    }
  },
  it: {
    navHeader: ['Inizio', 'Praticare', 'Risultati', 'Valutazione'],
    selectLanguage: {
      it: 'Italiano 🇮🇹',
      en: 'Inglese 🇺🇸',
      es: 'Spagnolo 🇪🇸'
    }
  }
}
