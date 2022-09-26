import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WhatsappLogo } from 'phosphor-react'

import style from '../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={style.navBox}>
      <Link href="/" className={style.logoBox}>
        <a>
          <Image
            src="/images/logo.svg"
            width="270"
            height="70"
            alt="Logo"
          />
        </a>
      </Link>
      <div className={style.linksBox}>
        <ul className={style.linksNav}>
        <li>
            <Link target="_blank" rel="noreferrer" href="/synolis">
              <a>O Produto</a>
            </Link>
            </li>
            <li>
              <a href="http://localhost:3000/#about">Quem Sou</a>
            </li>
            <li>
              <a href="http://localhost:3000/#where">Onde Me Encontrar</a>
            </li>
            <li>
              <a className={style.span} href="http://localhost:3000/#talkToMe">Fale Comigo</a>
            </li>
        </ul>
        <a target="_blank" rel="noreferrer" href="https://wa.me/message/NZ25IHMNMB76B1" className={style.whats}>
          <WhatsappLogo size={45} />
        </a>
      </div>
    </nav>
  )
}