import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  value: string;
}

interface TPayload {
  newValue: string;
}

const initialState = { value: '' } as State

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    change (state, { payload }: PayloadAction<TPayload>) {
      state.value = payload.newValue
      return state
    }
  }
})

export const { change } = searchSlice.actions

export const searchReducer = searchSlice.reducer
