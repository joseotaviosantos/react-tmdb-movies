import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';

import { setFavorite, removeFavorite } from 'store/slices/favoriteSlice';

import { IShortMovieItem } from 'interfaces/favoriteState';
import { SortOption } from 'components/sortSelector';

export const useFavoriteData = (movieItem?: IShortMovieItem) => {
  const dispatch = useDispatch<AppDispatch>();

  const [selectedSorter, setSelectedSorter] = useState<SortOption>(
    SortOption.titleAsc
  );

  const favoritesState = useSelector((state: RootState) => state.favorites);

  const isFavorited = favoritesState.favoriteList.find(
    (item) => item.id === movieItem?.id
  );

  const onFavoritePress = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!movieItem?.id) return;

    if (!isFavorited) {
      return dispatch(setFavorite(movieItem));
    }

    return dispatch(removeFavorite(movieItem));
  };

  const sorteredFavoriteData = useMemo(() => {
    return [...favoritesState.favoriteList].sort((a, b) => {
      if (selectedSorter === SortOption.titleAsc) {
        return a.title.localeCompare(b.title);
      }

      if (selectedSorter === SortOption.titleDesc) {
        return b.title.localeCompare(a.title);
      }

      if (selectedSorter === SortOption.averageAsc) {
        return b.vote_average - a.vote_average;
      }

      if (selectedSorter === SortOption.averageDesc) {
        return a.vote_average - b.vote_average;
      }

      return 0;
    });
  }, [selectedSorter, favoritesState]);

  return {
    isFavorited,
    favoritesState,
    selectedSorter,
    sorteredFavoriteData,
    onFavoritePress,
    setSelectedSorter,
  };
};
