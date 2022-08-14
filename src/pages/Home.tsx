import React from 'react'
import {
  BsFillArrowLeftCircleFill as ArrowLeft,
  BsFillArrowRightCircleFill as ArrowRight
} from 'react-icons/bs'
import styles from './Home.module.css'
import { useSelector } from 'react-redux'
import { TStore } from '../store'
import { Video } from '../types'
import TrendingItem from '../components/trending/TrendingItem'

const Home = () => {
  const data = useSelector((state: TStore) => state.videoReducer)

  const trendingVideos = data.filter(
    (video: Video) => video.isTrending === true
  ).map((entry) => <TrendingItem key={entry.id} video={entry} />)

  return (
    <section className={styles.container}>
      <h2>Trending</h2>
      <div className={styles.wrapper}>
        <ArrowLeft className={styles.left} />
        <div className={styles.carousel}>
         {trendingVideos}
        </div>
        <ArrowRight className={styles.left} />
      </div>
    </section>
  )
}

export default Home
