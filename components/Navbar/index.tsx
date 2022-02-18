import Link from 'next/link'
import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Inicio</a>
      </Link>
      <Link href="/practicar">
        <a>Practicar</a>
      </Link>
      <Link href="/estadisticas">
        <a>Estadísticas</a>
      </Link>
      <Link href="/comentarios">
        <a>Comentarios</a>
      </Link>
    </nav>
  )
}

export default Navbar
