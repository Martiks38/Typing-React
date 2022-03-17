import Image from 'next/image'
import Link from 'next/link'
import Navbar from 'layout/Navbar'
import LOGO from 'public/favicon.webp'

function Header() {
  return (
    <>
      <header className="header">
        <Link href="/">
          <a>
            <Image
              src={LOGO}
              alt="TypingSo"
              height={60}
              width={80}
              layout="fixed"
              objectFit="contain"
            />
          </a>
        </Link>
        <Navbar />
      </header>
    </>
  )
}

export default Header
