import { useSelector } from 'react-redux'
import { TStore } from '../store'
import { Category } from '../types'

const useFilterVideos = ({ videoCategory } : {videoCategory: Category | ''}) => {
  const videos = useSelector((state: TStore) => state.videoReducer)
  if (videoCategory) {
    return videos?.filter((video) => video.category === videoCategory)
  } else {
    return videos
  }
}

export default useFilterVideos
