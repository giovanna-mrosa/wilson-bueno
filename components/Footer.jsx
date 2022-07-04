import React from "react";
import Image from "next/image";

import style from '../styles/Footer.module.scss'
import Link from "next/link";

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
              <Image  
                src="/images/linkedin-icon.svg"
                width="28"
                height="28"
                alt="LinkedIn icon"
              />
            </a>
          </button>
          <button className={style.media}>
            <a 
              href="/" 
              target="_blank" 
              rel="noreferrer"
            >
              <Image  
                src="/images/whatsapp-icon.svg"
                width="28"
                height="28"
                alt="WhatsApp icon"
              />
            </a>
          </button>
          <button className={style.media}>
            <a 
              href="https://www.instagram.com/wilsonbuenodesouza/" 
              target="_blank" 
              rel="noreferrer"
            >
              <Image  
                src="/images/instagram-icon.svg"
                width="28"
                height="28"
                alt="Instagram icon"
              />
            </a>
          </button>
        </div>
      </div>    
  </footer>
  )
}