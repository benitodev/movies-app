import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../pages/Home'
import Movies from '../../pages/Movies'

import Search from '../../pages/Search'

import Series from '../../pages/Series'
import SearchRoute from '../routings/SearchRoute'

const MainContentRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Navigate to='/home' /> }/>

    <Route path='/search' element={<Search></Search>}/>

    <Route path='/home' element={<SearchRoute><Home/></SearchRoute>} />

    <Route path='/movies' element={<SearchRoute><Movies/></SearchRoute> } />

    <Route path='/series' element={<SearchRoute><Series/></SearchRoute>} />

  </Routes>
  )
}

export default React.memo(MainContentRoutes)
