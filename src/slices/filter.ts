import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from '../types'

interface State {
  filter: Category | '';
}

interface TPayload {
  newValue: Category | '';
}

const initialState = { filter: '' } as State

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    change (state, { payload }: PayloadAction<TPayload>) {
      state.filter = payload.newValue
    }
  }
})

export const { change } = filterSlice.actions
export const filterReducer = filterSlice.reducer
