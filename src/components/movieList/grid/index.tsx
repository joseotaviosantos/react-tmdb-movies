import { useSelector } from 'react-redux';

import type { RootState } from 'store';

import { IShortMovieItem } from 'interfaces/favoriteState';

import { MovieCard } from 'components/movieList/card';

import { GridContainer } from './styles';

interface IMovieGridProps {
  movieList: IShortMovieItem[];
}

export const MovieGrid = ({ movieList }: IMovieGridProps) => {
  const renderGridItems = () => {
    return movieList.map((item) => {
      return (
        <MovieCard
          key={item?.id}
          movieId={item?.id}
          imageUrl={item?.poster_path}
          movieTitle={item?.title}
          voteAverage={item?.vote_average}
        />
      );
    });
  };

  return <GridContainer>{renderGridItems()}</GridContainer>;
};
