import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import styles from './App.module.css'
import { Video } from './types'
import * as videoService from './services/video'
function App () {
  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    videoService.getVideos().then(setVideos)
  }, [])
  console.log(videos)
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Home data={videos}/>}/>
      </Routes>
    </div>
  )
}

export default App
