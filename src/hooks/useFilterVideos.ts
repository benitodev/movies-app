import { useSelector } from 'react-redux'
import { TStore } from '../store'
import { Category } from '../types'

const useFilterVideos = ({ videoCategory, saved } : {videoCategory?: Category | '', saved?: Boolean}) => {
  const videos = useSelector((state: TStore) => state.videoReducer)
  const videosSaved = useSelector((state: TStore) => state.savedReducer)
  if (videoCategory) {
    return videos?.filter((video) => video.category === videoCategory)
  } else if (saved) {
    console.log(videosSaved)
    return videos?.filter((video) => videosSaved.indexOf(video.id) !== -1)
  } else {
    return videos
  }
}

export default useFilterVideos
