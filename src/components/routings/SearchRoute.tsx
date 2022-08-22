import React from 'react'
import { useSelector } from 'react-redux'
import Search from '../../pages/Search'
import { TStore } from '../../store'

const SearchRoute = ({ children }: {children: React.ReactElement}) => {
  const search = useSelector((state: TStore) => state.searchReducer.value)
  return search ? <Search/> : children
}

export default SearchRoute
