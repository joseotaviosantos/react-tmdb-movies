import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { MovieGrid } from 'components/movieList/grid';

export const FavoritePage = () => {
  const favoritesState = useSelector((state: RootState) => state.favorites);

  return <MovieGrid movieList={favoritesState.favoriteList} />;
};
