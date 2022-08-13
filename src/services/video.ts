import { Video } from '../types'

export const getVideos = async (): Promise<Video[]> => {
  const response = await fetch('https://react-entertainment-default-rtdb.europe-west1.firebasedatabase.app/entries.json')
  return response.json()
}
