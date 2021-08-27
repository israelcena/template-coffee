import Link from 'next/link'
import Styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <Link href="/">Café Gostoso</Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Menu</Link>
        </li>
        <li>
          <Link href="/">Novidades</Link>
        </li>
        <li>
          <Link href="/">Contato</Link>
        </li>
      </ul>
    </nav>
  )
}
