import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { change } from '../slices/filter'
import Card from '../components/card/Card'
import useFilterVideos from '../hooks/useFilterVideos'
import styles from './Movies.module.css'
const Movies = () => {
  const videos = useFilterVideos({ videoCategory: 'Movie' })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(change({ newValue: 'Movie' }))
  }, [dispatch])

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {videos.map((card) => <Card key={card.id} video={card}></Card>)}
      </div>
    </div>
  )
}

export default Movies
