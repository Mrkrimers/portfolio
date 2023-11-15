/* eslint-disable @next/next/no-page-custom-font */
import Header from '@/components/Header/Header'
import style from '../styles/Home.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <div className={style.sectionRowOne}>
        <div className={style.imgSmile}></div>

        <div className={style.info}>
          <h1>Aliaksandr Yarmosh</h1>
          <p>
            <span>Based</span>
            <span>Republic of Belarus</span>
          </p>
          <p>
            <span>Phone</span>
            <span>+375 29 631 22 76</span>
          </p>
          <p>
            <span>E-mail</span>
            <span>mrkrimerssasha@gmail.com</span>
          </p>
        </div>
      </div>

      <h2 className={style.expH2}>Work Experience</h2>

      <div className={style.sectionRowTwo}>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>

    </div>
  )
}
