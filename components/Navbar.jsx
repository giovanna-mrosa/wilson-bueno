import Image from "next/image";
import Link from "next/link";
import React from "react";

import style from '../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <header className={style.headerBox}>
      <div className={style.logoBox}>
        <Image
          src="/images/logo.svg"
          width="270"
          height="70"
          alt="Logo"
        />
      </div>
      <div className={style.linksBox}>
        <ul className={style.linksHeader}>
        <li>
            <Link href="/synolis">
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
        <a href="https://wa.me/message/NZ25IHMNMB76B1" className={style.whats}>
          <Image
            src="/images/whatsapp-icon-white.svg"
            width="40"
            height="40"
            alt="Whatsapp icon"
          />
        </a>
      </div>
    </header>
  )
}