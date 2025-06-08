import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';

import { setFavorite, removeFavorite } from 'store/slices/favoriteSlice';

import { IShortMovieItem } from 'interfaces/favoriteState';

export const useFavoriteData = (movieItem: IShortMovieItem) => {
  const dispatch = useDispatch<AppDispatch>();

  const favoritesState = useSelector((state: RootState) => state.favorites);

  const isFavorited = favoritesState.favoriteList.find(
    (item) => item.id === movieItem.id
  );

  const onFavoritePress = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!movieItem.id) return;

    if (!isFavorited) {
      return dispatch(setFavorite(movieItem));
    }

    return dispatch(removeFavorite(movieItem));
  };

  return {
    isFavorited,
    onFavoritePress,
  };
};
