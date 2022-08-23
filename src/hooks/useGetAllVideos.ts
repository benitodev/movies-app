import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInitVideos } from '../slices/video'
import * as videoService from '../services/video'
import { Video } from '../types'
import { TStore } from '../store'
const useGetAllVideos = () => {
  const videosSaved = useSelector((state: TStore) => state.savedReducer)
  const [videosRaw, setVideosRaw] = useState<Video[]>([])

  const dispatch = useDispatch()

  useEffect(() => {
    if (videosRaw.length === 0) return
    dispatch(setInitVideos({ videos: videosRaw }))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videosRaw, videosSaved])

  useEffect(() => {
    async function fetchData () {
      const response = await videoService.getVideos()
      const newVideos = [...response]
      newVideos.forEach((video) => {
        if (videosSaved.includes(video.id)) video.isSaved = true
        if (!videosSaved.includes(video.id)) video.isSaved = false
      })
      setVideosRaw(newVideos)
    }
    fetchData()
  }, [videosSaved])
}

export default useGetAllVideos
