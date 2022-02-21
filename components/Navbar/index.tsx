import Link from 'next/link'

import { useText } from 'hooks/useText'

const routes = ['/', '/practice', '/results', '/feedback']

function Navbar() {
  const { navHeader, selectLanguage, handleLanguage } = useText()

  return (
    <>
      <nav>
        {navHeader.map((el, index) => (
          <Link key={Date.now() * Math.random()} href={routes[index]}>
            <a>{el}</a>
          </Link>
        ))}
        <select name="lang" onChange={handleLanguage}>
          {Object.entries(selectLanguage).map((el) => (
            <option key={Date.now() * Math.random()} value={el[0]}>
              {el[1]}
            </option>
          ))}
        </select>
      </nav>
      <style jsx>{`
        nav > a {
          color: #000;
          padding-right: 2rem;
          font-size: 1.2rem;
          font-weight: 700;
        }
      `}</style>
    </>
  )
}

export default Navbar
