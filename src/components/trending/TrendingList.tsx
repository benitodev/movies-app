import React from 'react'
import { TrendingListProps, Video } from '../../types'
import TrendingItem from './TrendingItem'
const TrendingList = ({ list }: TrendingListProps) => {
  const trendingVideos = list.filter(
    (video: Video) => video.isTrending === true
  )

  return (
    <>
      {trendingVideos &&
        trendingVideos.map((entry) => (
          <TrendingItem key={entry.id} video={entry} />
        ))}
    </>
  )
}

export default TrendingList
