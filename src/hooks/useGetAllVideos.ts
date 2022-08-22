import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInitVideos } from '../slices/video'
import * as videoService from '../services/video'
import { Video } from '../types'
import { TStore } from '../store'
const useGetAllVideos = () => {
  const videosSaved = useSelector((state: TStore) => state.savedReducer)
  const dispatch = useDispatch()
  const [videosRaw, setVideosRaw] = useState<Video[]>([])

  // useEffect(() => {
  //   if (videosRaw.length === 0) return
  //   const newData = [...videosRaw]
  // newData.map((video) => {
  //   if (videosSaved.includes(video.id)) { video.isSaved = true }
  //   if (!videosSaved.includes(video.id)) { video.isSaved = false }
  //   return video
  // })
  // newData.map((video) => ({ ...video, isSaved: videosSaved.includes(video.id) ? true : false }))
  // newData.forEach(function (entry) {
  //   entry.isSaved = !!videosSaved.includes(entry.id)
  // })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [videosSaved, videosRaw])
  useEffect(() => {
    if (videosRaw.length === 0) return
    dispatch(setInitVideos({ videos: { raw: videosRaw, videosSaved } }))
  }, [videosRaw, videosSaved, dispatch])

  useEffect(() => {
    async function fetchData () {
      const response = await videoService.getVideos()
      setVideosRaw(response)
    }
    fetchData()
  }, [])
}

export default useGetAllVideos
