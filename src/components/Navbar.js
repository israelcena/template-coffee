import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useRef, useCallback } from 'react'

import navLogo from '../../public/images/logo.png'
import { FaBars } from 'react-icons/fa'

import Styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const navRef = useRef(null)
  const handleClick = useCallback(() => {
    navRef.current.classList.toggle(Styles.active)
  }, [navRef])
  const handleClickOutside = useCallback(
    (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        navRef.current.classList.remove(Styles.active)
      }
    },
    [navRef]
  )
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
  }, [handleClickOutside])

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.navbarLogo}>
        <Link href="/">
          <a>
            <Image
              src={navLogo}
              alt="Logo"
              layout="responsive"
              width={240}
              height={139}
              className={Styles.navbarLogoImage}
            />
          </a>
        </Link>
      </div>

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
