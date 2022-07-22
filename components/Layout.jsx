import React from "react";
import Footer from './Footer'
import Head from 'next/head'

import style from '../styles/Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.svg" />
        <title>Wilson Bueno</title>
        <meta name="keywords" content="Wilson Bueno, SynolisVA, Synolis, Infiltração, Artrose" />        
      </Head>

      <main className={style.mainContainer}>{children}</main>
      <Footer />
    </>
  )
}
