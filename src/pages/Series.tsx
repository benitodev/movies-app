import React, { useEffect } from 'react'
import useFilterVideos from '../hooks/useFilterVideos'
import { useDispatch } from 'react-redux'
import { change } from '../slices/filter'
import SeriesContent from '../components/content/MoviesAndSeriesContent'
const Series = () => {
  const videos = useFilterVideos({ videoCategory: 'TV Series' })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(change({ newValue: 'TV Series' }))
  }, [dispatch])
  return (
    <SeriesContent entries={videos}></SeriesContent>
  )
}

export default Series
