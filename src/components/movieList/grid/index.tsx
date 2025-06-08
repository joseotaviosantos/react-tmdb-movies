import { useSelector } from 'react-redux';

import type { RootState } from 'store';

import { MovieCard } from 'components/movieList/card';

import { GridContainer } from './styles';

export const MovieGrid = () => {
  const popularMoviesState = useSelector(
    (state: RootState) => state.popularMovies
  );

  const renderGridItems = () => {
    return popularMoviesState.results.map((item) => {
      const parsedAverage = item?.vote_average.toFixed(1);

      return (
        <MovieCard
          key={item?.id}
          imageUrl={item?.poster_path}
          movieTitle={item?.title}
          voteAverage={parsedAverage}
        />
      );
    });
  };

  return <GridContainer>{renderGridItems()}</GridContainer>;
};
