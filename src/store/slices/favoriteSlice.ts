import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFavoriteState, IShortMovieItem } from 'interfaces/favoriteState';

const FAVORITE_LOCAL_STORAGE_KEY = 'favoriteList';

const persistedFavorites = localStorage.getItem(FAVORITE_LOCAL_STORAGE_KEY);

const INITIAL_STATE: IFavoriteState = {
  favoriteList: persistedFavorites ? JSON.parse(persistedFavorites) : [],
};

const favoriteSlice = createSlice({
  name: 'favoriteSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setFavorite(state, action: PayloadAction<IShortMovieItem>) {
      state.favoriteList = [...state.favoriteList, action.payload];
      localStorage.setItem(
        FAVORITE_LOCAL_STORAGE_KEY,
        JSON.stringify(state.favoriteList)
      );
    },
    removeFavorite(state, action: PayloadAction<IShortMovieItem>) {
      const newList = state.favoriteList.filter(
        (item) => item.id !== action.payload.id
      );

      state.favoriteList = newList;
      localStorage.setItem(
        FAVORITE_LOCAL_STORAGE_KEY,
        JSON.stringify(state.favoriteList)
      );
    },
  },
});

export const { setFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
