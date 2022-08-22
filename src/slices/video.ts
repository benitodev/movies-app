import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Video } from '../types'
import { SavedState } from './saved'

type State = Video[] | []

interface TPayload {
  videos: {raw:Video[], videosSaved: SavedState};
}
const initialState: State = []

export const videoSlice = createSlice({
  name: 'video',
  initialState: initialState as State,
  reducers: {
    setInitVideos: (state, { payload }: PayloadAction<TPayload>) => {
      const { raw, videosSaved } = payload.videos
      const newState = raw.map((video) => {
        video.isSaved = !!videosSaved.includes(video.id)
        console.log(video)
        return video
      })
      return newState
    }
  }
})

export const videoReducer = videoSlice.reducer
export const { setInitVideos } = videoSlice.actions
