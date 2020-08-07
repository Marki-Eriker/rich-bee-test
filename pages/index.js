import React from 'react'
import Head from 'next/head'
import { Footer, GetApp, Header, Reviews, Trial } from '../src/modules'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Relationz</title>
        <link rel="stylesheet" type="text/css" charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      </Head>
      <Header/>
      <main>
        <GetApp/>
        <Reviews/>
        <Trial/>
      </main>
      <Footer/>
    </div>
  )
}
