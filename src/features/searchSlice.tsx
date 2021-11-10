import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store';

export interface searchState {
    value: string
}

const initialState: searchState = {
    value: ""
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setSearchQuery, } = searchSlice.actions;
export const searchConst = (state: RootState) => state.search.value;
export default searchSlice.reducer
