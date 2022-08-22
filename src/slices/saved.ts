import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'

export type SavedState = string[]

interface TPayload {
    newVideo?: string,
    videoToRemove?: string
}

const persistState = (state: SavedState) => {
  localStorage.setItem('videosSaved', JSON.stringify(state))
}
// const initialState = { videos: [], isSaved: false } as State

const initialState = JSON.parse(
  // @ts-ignore
  localStorage.getItem('videosSaved')
) || ['en1', 'en2']

const savedSlice = createSlice({
  name: 'saved',
  initialState,
  reducers: {
    addVideo (state, { payload } : PayloadAction<TPayload>) {
      state.push(payload.newVideo)
      persistState(current(state))
    },
    removeVideo (state, { payload } : PayloadAction<TPayload>) {
      const index = state.indexOf(payload.videoToRemove)
      state.splice(index, 1)
      persistState(current(state))
    }
  }
})

export const { addVideo, removeVideo } = savedSlice.actions
export const savedReducer = savedSlice.reducer
