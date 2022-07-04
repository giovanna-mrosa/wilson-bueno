import React from "react";
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.svg" />
        <title>Wilson Bueno</title>
        <meta name="keywords" content="Wilson Bueno, SynolisVA, Synolis, Infiltração" />        
      </Head>

      <main>{children}</main>
      <Footer />
    </>
  )
}
