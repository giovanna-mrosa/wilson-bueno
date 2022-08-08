import Image from "next/image";
import Link from "next/link";
import {React, useState} from "react";

import style from '../styles/NavbarMobile.module.scss'

export default function NavbarMobile() {
  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(!toggle)
  }

  const isMenuOpen = toggle === false ? `${style.hiddenMenuBox} ${style.menuBox}` : style.menuBox

  return (
    <nav className={style.navBoxMob}>
      <Link href="/" className={style.logoBoxMob}>
        <a>
          <Image src="/images/logo.svg" width="300" height="79" alt="" />
        </a>
      </Link>
      
      <div className={style.mobMenu}>     
        <input className={style.burgerInput} id="burger" type="checkbox" />
        <label htmlFor="burger">
          <div className={style.burger} onClick={handleToggle}></div>
        </label>
        <div className={isMenuOpen}>
          <ul className={style.linksMob}>
            <li>
              <Link target="_blank" rel="noreferrer" href="/synolis">
                <a>O Produto</a>
              </Link>
            </li>
            <li>
              <a href="#">Quem Sou</a>
            </li>
            <li>
              <a href="#">Onde Me Encontrar</a>
            </li>
            <li>
              <a className={style.span} href="#">Fale Comigo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}