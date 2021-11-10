import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store';

export interface filterState {
  value: string
}

const initialState: filterState = {
  value: "all"
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setSelected, } = filterSlice.actions;
export const filterConst = (state: RootState) => state.filter.value;
export default filterSlice.reducer
