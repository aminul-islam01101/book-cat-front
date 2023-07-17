/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterState = {
  searchTerm?: string;
  genre?: string;
  publicationYear?: string;
};

const initialState: FilterState = {};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setPublicationYear: (state, action: PayloadAction<string>) => {
      state.publicationYear = action.payload;
    },
  },
});

export const { setSearchTerm, setGenre, setPublicationYear } = filterSlice.actions;
export default filterSlice.reducer;
