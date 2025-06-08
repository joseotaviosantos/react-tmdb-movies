import { useSearchParams } from 'react-router-dom';

import { useMovieSearch } from 'hooks/useMovieSearch';

import { MovieGrid } from 'components/movieList/grid';
import { SearchResume } from 'components/movieList/searchResume';
import { ActivityIndicator } from 'components/activityIndicator';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('q');

  const { isLoading, error, movieList, movieMeta, updateMovieList } =
    useMovieSearch(queryParam || '');

  return (
    <>
      <SearchResume
        searchedQuery={queryParam}
        resultsCount={movieMeta?.totalResults || 0}
      />
      <MovieGrid
        movieList={movieList}
        hidePaginationAction={isLoading || movieMeta?.totalResults === 0}
        onPaginationPress={updateMovieList}
      />
      {isLoading && <ActivityIndicator />}
    </>
  );
};
