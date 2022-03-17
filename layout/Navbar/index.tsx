import Link from 'next/link'
import { useTranslations } from 'hooks/useTranslations'
import routes from 'consts/routesNavbar'

function Navbar() {
  const { navHeader, selectLanguage, handleLanguage } = useTranslations()

  return (
    <div className="header__container">
      <nav className="nav">
        {navHeader.map((el, index) => (
          <Link
            key={Math.floor(Date.now() * Math.random())}
            href={routes[index]}
          >
            <a className="nav__link">{el}</a>
          </Link>
        ))}
      </nav>
      <select name="lang" onChange={handleLanguage} className="langSelector">
        {Object.entries(selectLanguage).map((el) => (
          <option key={Date.now() * Math.random()} value={el[0]}>
            {el[1]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Navbar
