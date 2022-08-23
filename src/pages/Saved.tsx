import React from 'react'
import useFilterVideos from '../hooks/useFilterVideos'
import SavedContent from '../components/content/MoviesAndSeriesContent'
const Saved = () => {
  const videos = useFilterVideos({ saved: true })
  return (
    <SavedContent entries={videos}></SavedContent>
  )
}

export default Saved
