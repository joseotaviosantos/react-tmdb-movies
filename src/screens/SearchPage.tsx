import { useSearchParams } from 'react-router-dom';

import { useMovieSearch } from 'hooks/useMovieSearch';
import { MovieGrid } from 'components/movieList/grid';
import { ActivityIndicator } from 'components/activity-indicator';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('q');

  const { isLoading, error, movieList, updateMovieList } = useMovieSearch(
    queryParam || ''
  );

  return (
    <>
      <MovieGrid
        movieList={movieList}
        hidePaginationAction={isLoading}
        onPaginationPress={updateMovieList}
      />
      {isLoading && <ActivityIndicator />}
    </>
  );
};
