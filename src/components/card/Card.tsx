import React from 'react'
import { Video } from '../../types'
import styles from './Card.module.css'
import useFilterIcons from '../../hooks/useFilterIcons'
import SavedButton from '../buttons/SavedButton'
const Card = ({ video }: {video: Video}) => {
  const icon = useFilterIcons(video)
  return (
    <div className={styles.card}>
      {typeof video.isSaved === 'boolean' && <SavedButton id={video.id} isSaved={video.isSaved} styles={styles}></SavedButton>}

        <img src={video.thumbnail.regular.small} alt="" />
        <div className={styles.description}>
            {video.year} &#8226; {icon} {video.category} &#8226; {video.rating}
        </div>
        <h3>{video.title}</h3>
    </div>
  )
}

export default Card
