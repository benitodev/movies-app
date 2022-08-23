import React from 'react'
import useFilterIcons from '../../hooks/useFilterIcons'
import { Video } from '../../types'
import styles from './TrendingItem.module.css'

const TrendingItem = ({ video }: { video: Video }) => {
  const icon = useFilterIcons(video)

  return (
    <div className={styles.card}>
      <img src={video.thumbnail.trending.small} alt="" />
      {video.thumbnail.trending && (
        <div className={styles.container}>
          <div className={styles.info}>
            {video.thumbnail.trending && (
              <>
                {' '}
                {video.year} &#8226; {icon} {video.category} &#8226;{' '}
                {video.rating}{' '}
              </>
            )}
          </div>
          <h3>{video.title}</h3>
        </div>
      )}
    </div>
  )
}

export default TrendingItem
