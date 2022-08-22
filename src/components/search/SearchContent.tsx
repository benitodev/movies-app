import React from 'react'
import useFilterSearchContent from '../../hooks/useFilterSearchContent'
import styles from './SearchContent.module.css'
import Card from '../card/Card'

import useFilterVideos from '../../hooks/useFilterVideos'
import { useSelector } from 'react-redux'
import { TStore } from '../../store'

const SearchContent = () => {
  const filter = useSelector((state: TStore) => state.filterReducer.filter)
  const videos = useFilterVideos({ videoCategory: filter })
  const filteredContent = useFilterSearchContent({ videos })

  return (
    <div className={styles.container}>
        <div className={styles.cardContainer}>
      {filteredContent.map((content) => (
          <Card key={content.id} video={content} />
      ))}
          </div>
    </div>
  )
}

export default SearchContent
