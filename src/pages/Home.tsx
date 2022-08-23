import React, { useEffect } from 'react'
import styles from './Home.module.css'
import Trending from '../components/trending/Trending'
import useTrendingVideosAndCommons from '../hooks/useTrendingVideosAndCommons'
import { useDispatch } from 'react-redux'
import { change } from '../slices/filter'

const Home = () => {
  const { trendingVideos, commonVideos } = useTrendingVideosAndCommons()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(change({ newValue: '' }))
  }, [dispatch])

  return (
    <section className={styles.container}>
      <h2>Trending</h2>
        <Trending>
          {trendingVideos}
        </Trending>
      <h2>Recommend for you</h2>
      <div className={styles.cardContainer}>
      {commonVideos}
      </div>
    </section>
  )
}

export default Home
