import { useEffect } from 'react';

import { useMovieData } from 'hooks/useMovieData';

import { MovieGrid } from 'components/movieList/grid';
import { ActivityIndicator } from 'components/activityIndicator';

export const HomePage = () => {
  const {
    isLoading,
    popularMoviesState,
    getPopularMoviesData,
    fetchPopularMoviesData,
  } = useMovieData();

  useEffect(() => {
    getPopularMoviesData(1);
  }, []);

  return (
    <>
      <MovieGrid
        movieList={popularMoviesState.results}
        hidePaginationAction={isLoading}
        onPaginationPress={fetchPopularMoviesData}
      />
      {isLoading && <ActivityIndicator />}
    </>
  );
};
