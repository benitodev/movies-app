
import { useSelector } from 'react-redux'
import { TStore } from '../store'
import { Video } from '../types'

const useFilterSearchContent = ({ videos } : {videos: Video[]}) => {
  const search = useSelector((state: TStore) => state.searchReducer.value)
  const filteredContent = videos.filter(
    (video) => video.title.toLowerCase().indexOf(search.toLowerCase()) > -1
  )

  return filteredContent
}

export default useFilterSearchContent
