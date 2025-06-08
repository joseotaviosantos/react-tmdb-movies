import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { MovieGrid } from 'components/movieList/grid';
import { EmptyList } from 'components/movieList/emptyList';

export const FavoritePage = () => {
  const favoritesState = useSelector((state: RootState) => state.favorites);

  if (!favoritesState.favoriteList.length) return <EmptyList />;

  return <MovieGrid movieList={favoritesState.favoriteList} />;
};
