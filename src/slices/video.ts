import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Video } from '../types'

type State = Video[] | []

interface TPayload {
  videos: Video[];
}
const initialState: State = []

export const videoSlice = createSlice({
  name: 'video',
  initialState: initialState as State,
  reducers: {
    setInitVideos: (state, { payload }: PayloadAction<TPayload>) => {
      return payload.videos
    }
  }
})

export const videoReducer = videoSlice.reducer
export const { setInitVideos } = videoSlice.actions
