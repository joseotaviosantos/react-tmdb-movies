import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { useFavoriteData } from 'hooks/useFavoriteData';

import { MovieGrid } from 'components/movieList/grid';
import { EmptyList } from 'components/movieList/emptyList';
import { FavoriteHeader } from 'components/movieList/favoriteHeader';

export const FavoritePage = () => {
  const {
    favoritesState,
    sorteredFavoriteData,
    selectedSorter,
    setSelectedSorter,
  } = useFavoriteData();

  if (!favoritesState.favoriteList.length) return <EmptyList />;

  return (
    <>
      <FavoriteHeader
        selectedSorter={selectedSorter}
        setSelectedSorter={setSelectedSorter}
      />
      <MovieGrid movieList={sorteredFavoriteData} />
    </>
  );
};
