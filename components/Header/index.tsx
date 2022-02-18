import Link from 'next/link'
import Image from 'next/image'

import Navbar from 'components/Navbar'

import LOGO from 'public/favicon.png'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
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
  )
}

export default Header
