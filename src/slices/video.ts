import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Video } from '../types'

type State = Video[] | []

const initialState: State = []

interface TPayload {
  videos: Video[];
}
export const videoSlice = createSlice({
  name: 'video',
  initialState: initialState as State,
  reducers: {
    setInitVideos: (state, { payload }: PayloadAction<TPayload>) => {
      state = payload.videos
      return state
    }
  }
})

export const videoReducer = videoSlice.reducer
export const { setInitVideos } = videoSlice.actions
