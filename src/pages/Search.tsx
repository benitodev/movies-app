import React from 'react'
import { useSelector } from 'react-redux'
import Redirect from '../components/routings/Redirect'
import SearchContent from '../components/search/SearchContent'
import useSearchBoolean from '../hooks/useSearchBoolean'
import { TStore } from '../store'

const Search = () => {
  const search = useSelector((state: TStore) => state.searchReducer.value)
  const searchBoolean = useSearchBoolean({ search, lengthExpect: 0 })
  return (
    searchBoolean ? <SearchContent /> : <Redirect options={{ returnBack: true }}/>
  )
}

export default Search
