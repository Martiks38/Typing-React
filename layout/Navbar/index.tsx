import Link from 'next/link'
import { useTranslations } from 'hooks/useTranslations'
import routes from 'consts/routesNavbar'
import { useEffect } from 'react'

function Navbar() {
  const { navHeader, selectLanguage, handleLanguage } = useTranslations()

  useEffect(() => {
    const $select = document.querySelector<HTMLSelectElement>('select')

    const handleToggleAria = (event: KeyboardEvent | MouseEvent) => {
      if ($select !== null) {
        if (
          (event as KeyboardEvent).key === 'Escape' &&
          $select.ariaExpanded === 'true'
        )
          $select.ariaExpanded = 'false'

        $select.ariaExpanded === 'false'
          ? ($select.ariaExpanded = 'true')
          : ($select.ariaExpanded = 'false')

        $select?.addEventListener('keypress', handleToggleAria)
        $select?.addEventListener('click', handleToggleAria)
      }
    }

    return () => $select?.removeEventListener('keypress', handleToggleAria)
  }, [])

  return (
    <div className="header__container">
      <nav className="nav">
        {navHeader.map((el, index) => (
          <Link key={Date.now() + `${index}`} href={routes[index]}>
            <a className="nav__link">{el}</a>
          </Link>
        ))}
      </nav>
      <select
        name="lang"
        onChange={handleLanguage}
        className="langSelector"
        aria-expanded="false"
      >
        {Object.entries(selectLanguage).map((el, index) => (
          <option key={Date.now() + `${index}`} value={el[0]}>
            {el[1]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Navbar
