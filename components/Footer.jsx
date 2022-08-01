import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkedinLogo, WhatsappLogo, InstagramLogo } from 'phosphor-react'

import style from '../styles/Footer.module.scss'

export default function Footer() {
  return (
  <footer className={style.container}>
    <div className={style.rowLogo}>
        <Image  
          src="/images/logo-white.svg"
          width="455"
          height="123"
          alt="logo"
        />
      </div>
      <div className={style.rowRight}>
        <ul className={style.links}>
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
            <a href="#">Fale Comigo</a>
          </li>
        </ul>
        <div className={style.mediasBox}>
          <button className={style.media}>
            <a 
              href="https://www.linkedin.com/in/wilsonbuenodesouza/" 
              target="_blank" 
              rel="noreferrer"
            >
              <LinkedinLogo size={30} />
            </a>
          </button>
          <button className={style.media}>
            <a 
              href="https://wa.me/message/NZ25IHMNMB76B1" 
              target="_blank" 
              rel="noreferrer"
            >
              <WhatsappLogo size={30} />
            </a>
          </button>
          <button className={style.media}>
            <a 
              href="https://www.instagram.com/wilsonbuenodesouza/" 
              target="_blank" 
              rel="noreferrer"
            >
              <InstagramLogo size={30} />
            </a>
          </button>
        </div>
      </div>    
  </footer>
  )
}