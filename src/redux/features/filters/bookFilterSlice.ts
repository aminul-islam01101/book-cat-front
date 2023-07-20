/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterState = {
  searchTerm?: string;
  genre?: string;
  publicationYear?: string;
  limit?: number | null;
  sortOrder?: string;
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
    resetFilter: () => initialState,
    setLimitAndOrder: (
      state,
      action: PayloadAction<{ limit: number | null; sortOrder: string }>
    ) => {
      state.limit = action.payload.limit;
      state.sortOrder = action.payload.sortOrder;
    },
    setOrder: (state, action: PayloadAction<string>) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setSearchTerm, setGenre, setPublicationYear, resetFilter, setLimitAndOrder } =
  filterSlice.actions;
export default filterSlice.reducer;
