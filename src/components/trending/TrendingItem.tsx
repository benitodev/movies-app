import React from 'react'
import { Video } from '../../types'
import styles from './TrendingItem.module.css'
import { MdLocalMovies } from 'react-icons/md'
const TrendingItem = ({ video }: { video: Video }) => {
  return (
    <div>
      <img src={video.thumbnail.trending.small} alt="" />
      {video.thumbnail.trending && (
        <div className={styles.container}>
          <div className={styles.info}>
            {video.thumbnail.trending && (
              <>
                {' '}
                {video.year} &#8226; {<MdLocalMovies />} {video.category}{' '}
                &#8226; {video.rating}{' '}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default TrendingItem
