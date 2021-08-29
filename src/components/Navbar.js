import Link from 'next/link'
import Image from 'next/image'

import { useRef, useCallback } from 'react'

import navLogo from '../../public/images/logo.png'
import { FaBars } from 'react-icons/fa'

import Styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const navRef = useRef(null)
  const handleClick = useCallback(() => {
    navRef.current.classList.toggle(Styles.active)
  }, [navRef])

  return (
    <nav className={Styles.navbar}>
      <Link href="/">
        <div className={Styles.navbarLogo}>
          <Image
            src={navLogo}
            alt="Logo"
            layout="responsive"
            width={240}
            height={139}
            className={Styles.navbarLogoImage}
          />
        </div>
      </Link>
      <ul className={Styles.navbarNav} ref={navRef}>
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
      <FaBars onClick={handleClick} className={Styles.navbarIcon} />
    </nav>
  )
}
