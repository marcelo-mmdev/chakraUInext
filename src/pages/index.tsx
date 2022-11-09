import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './footer/Footer'
import HomePage from './home/HomePage'
import Menu from './menu/Menu'
import Skills from './skills/Skills'
import Work from './work/Work'

const Home: NextPage = () => {
  return (
    <>
      <Menu />
      <HomePage />
      <Work />
      <Skills />
      <Footer />
    </>
  )
}

export default Home
