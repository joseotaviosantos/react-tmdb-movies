import { configureStore } from '@reduxjs/toolkit';

import movieSlice from './slices/movieSlice';
import favoriteSlice from './slices/favoriteSlice';

export const store = configureStore({
  reducer: {
    popularMovies: movieSlice,
    favorites: favoriteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
