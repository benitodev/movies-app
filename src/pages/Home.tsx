import React from 'react'
import {
  BsFillArrowLeftCircleFill as ArrowLeft,
  BsFillArrowRightCircleFill as ArrowRight
} from 'react-icons/bs'
import styles from './Home.module.css'
import { HomeProps } from '../types'
import TrendingList from '../components/trending/TrendingList'

const Home = ({ data }: HomeProps) => {
  return (
    <section className={styles.container}>
      <h2>Trending</h2>
      <div className={styles.wrapper}>
        <ArrowLeft className={styles.left} />
        <div className={styles.carousel}>
          <TrendingList list={data}></TrendingList>
        </div>
        <ArrowRight className={styles.left} />
      </div>
    </section>
  )
}

export default Home
