import React from 'react'
import { useSelector } from 'react-redux'
import { TStore } from '../store'
import { Video } from '../types'
import Card from '../components/card/Card'
import TrendingItem from '../components/trending/TrendingItem'

const useTrendingVideosAndCommons = () => {
  const data = useSelector((state: TStore) => state.videoReducer)
  const trendingVideos = data.filter(
    (video: Video) => video.isTrending === true
  ).map((entry) => <TrendingItem key={entry.id} video={entry} />)

  const commonVideos = data.map((entry) => <Card key={entry.id} video={entry}/>)
  return { trendingVideos, commonVideos }
}

export default useTrendingVideosAndCommons
