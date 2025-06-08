import { useEffect } from 'react';

import { useMovieData } from 'hooks/useMovieData';

import { MovieGrid } from 'components/movieList/grid';
import { ActivityIndicator } from 'components/activity-indicator';

export const HomePage = () => {
  const { isLoading, popularMoviesState, getPopularMoviesData } =
    useMovieData();

  useEffect(() => {
    getPopularMoviesData(1);
  }, []);

  return (
    <>
      <MovieGrid
        movieList={popularMoviesState.results}
        showPagination={!isLoading}
      />
      {isLoading && <ActivityIndicator />}
    </>
  );
};
