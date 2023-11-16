/* eslint-disable @next/next/no-page-custom-font */
import Header from '@/components/Header/Header'
import style from '../styles/Home.module.scss'
import Head from 'next/head'
import Svg from '@/components/svg/Svg'
import Link from 'next/link'

const skills = ['JavaScript', 'TypeScript', 'Node.js', 'Express', 'React', 'NEXT.js', 'Redux', 'Redux Toolkit', 'Redux Toolkit Query', 'MySQL',
  'PostgreSQL', 'MongoDB', 'Bootstrap', 'Material UI', 'Mongoose', 'JWT', 'JSON', 'Jest']

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
        <p className={style.one}>FullStack Developer</p>
        <p className={style.two}>HSC Technology</p>
        <p className={style.three}>Oct 2022 - Present</p>
        <p className={style.four}>Task Manager for automated email, SMS, and call distribution based on a specified schedule. Implemented
          features for task creation, scheduling, and management, as well as defining recipients and message
          content</p>
      </div>

      <h2 className={style.expH2}>Skills</h2>

      <div className={style.sectionRowThree}>
        {skills.map((el, i) => <p key={i}>{el}</p>)}
      </div>

      <div className={style.sectionRowFour}>

        <div className={style.wrapper}>
          <Svg id='one' />

          <div className={style.infoEducation}>
            <p>EDUCATION</p>
            <p>1. BNTU</p>
            <p>2. Hschool</p>
          </div>
        </div>

        <div className={style.wrapper}>
          <Svg id='two' />

          <div className={style.infoLanguage}>
            <p>Belarusian — Native</p>
            <p>Russian — Native</p>
            <p>English — Intermediate</p>
          </div>
        </div>

      </div>

      <div className={style.sectionRowFive}>
        <div className={style.imgQR}></div>

        <div className={style.infoLinks}>
          <h1>my portfolio on GitHub</h1>
          <Link href={'https://github.com/Mrkrimers'}>
            <p>github.com/Mrkrimers</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
