import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IGetMoviesRes } from 'interfaces/movieApi';
import { IMovieState } from 'interfaces/movieState';

const INITIAL_STATE: IMovieState = {
  results: [],
  page: 0,
  errorMessage: null,
  total_results: 0,
};

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setMoviesList(state, action: PayloadAction<IGetMoviesRes>) {
      state.results = [...action.payload.results];
      state.page = action.payload.page;
      state.total_results = action.payload.total_results;
    },
    updateMoviesList(state, action: PayloadAction<IGetMoviesRes>) {
      state.results = [...state.results, ...action.payload.results];
      state.page = action.payload.page;
    },
    setFetchError(state, action: PayloadAction<string>) {
      state.results = [];
      state.total_results = 0;
      (state.page = 0), (state.errorMessage = action.payload);
    },
  },
});

export const { setMoviesList, updateMoviesList, setFetchError } =
  movieSlice.actions;
export default movieSlice.reducer;
