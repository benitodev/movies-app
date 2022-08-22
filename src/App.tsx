import React from 'react'
import styles from './App.module.css'

import useGetAllVideos from './hooks/useGetAllVideos'
import SideBar from './components/sidebar/SideBar'
import SearchNav from './components/search/SearchNav'
import MainContentRoutes from './components/content/MainContentRoutes'
function App () {
  // custom hook to call all videos and put them in the store
  useGetAllVideos()

  return (
    <div className={styles.app}>
      <SideBar/>
      <SearchNav/>
      <MainContentRoutes/>
    </div>
  )
}

export default App
