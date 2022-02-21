import Link from 'next/link'
import Image from 'next/image'

import Navbar from 'components/Navbar'

import LOGO from 'public/favicon.png'

function Header() {
  return (
    <>
      <header>
        <Link href="/">
          <a>
            <Image
              src={LOGO}
              alt="TypingSo"
              height={60}
              width={80}
              layout="fixed"
              objectFit="contain"
              tabIndex={0}
            />
          </a>
        </Link>
        <Navbar />
      </header>
      <style jsx>{`
        header {
          display: flex;
          padding: 0 3rem;
          height: 5rem;
          width: 100%;
          align-items: center;
          background: var(--blue-light);
          gap: 2em;
        }
      `}</style>
    </>
  )
}

export default Header
