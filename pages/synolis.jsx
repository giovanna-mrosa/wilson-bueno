import Image from 'next/image';
import { useEffect, useState } from 'react'
import Navbar from '/components/Navbar'
import NavbarMobile from '/components/NavbarMobile'

import style from '../styles/Synolis.module.scss'
import Link from 'next/link';
import { CaretLeft } from 'phosphor-react';

export default function Synolis() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.screen.width <= 1024) {
      setIsMobile(true)
    }
  }, [])

  return (   
      <>
        <header className={style.header}>
          {isMobile ? (
            <NavbarMobile />
          ) : (
            <Navbar />
          )            
          }   
        </header>

        <Link href="/" >
          <a className={style.back}>
            <CaretLeft /> Voltar
          </a>
        </Link>
        
        <div /*className={style.cheetah}*/>
          <Image 
            src="/images/cheetah.png"
            width="560"
            height="315"
            alt=""          
            />
        </div> 
      </>   
  )
}