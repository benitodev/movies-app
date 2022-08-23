import React from 'react'
import { Video } from '../../types'
import Card from '../card/Card'
import styles from './MoviesAndSeriesContent.module.css'
const MoviesAndSeriesContent = ({ entries }: { entries: Video[] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {entries.map((entry) => (
          <Card key={entry.id} video={entry} />
        ))}
      </div>
    </div>
  )
}

export default MoviesAndSeriesContent
