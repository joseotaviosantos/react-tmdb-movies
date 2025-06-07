import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IGetPopularMoviesRes } from 'interfaces/movieApi';
import { IMovieState } from 'interfaces/movieState';

const INITIAL_STATE: IMovieState = {
  results: [],
  page: 0,
  errorMessage: null,
};

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setMoviesList(state, action: PayloadAction<IGetPopularMoviesRes>) {
      state.results = [...action.payload.results];
      state.page = action.payload.page;
    },
    updateMoviesList(state, action: PayloadAction<IGetPopularMoviesRes>) {
      state.results = [...state.results, ...action.payload.results];
      state.page = action.payload.page;
    },
    setFetchError(state, action: PayloadAction<string>) {
      state.results = [];
      (state.page = 0), (state.errorMessage = action.payload);
    },
  },
});

export const { setMoviesList, updateMoviesList, setFetchError } =
  movieSlice.actions;
export default movieSlice.reducer;
