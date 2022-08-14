import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import styles from './App.module.css'
import * as videoService from './services/video'
import { useDispatch } from 'react-redux'
import { setInitVideos } from './slices/video'
function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    videoService.getVideos()
      .then((videos) => { dispatch(setInitVideos({ videos })) })
  }, [])
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
