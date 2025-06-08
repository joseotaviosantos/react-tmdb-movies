import { IShortMovieItem } from 'interfaces/favoriteState';

import { useMovieData } from 'hooks/useMovieData';

import { MovieCard } from 'components/movieList/card';
import { Button } from 'components/button';

import { GridContainer, GridFooter } from './styles';

interface IMovieGridProps {
  movieList: IShortMovieItem[];
  showPagination?: boolean;
}

export const MovieGrid = ({ movieList, showPagination }: IMovieGridProps) => {
  const { fetchPopularMoviesData } = useMovieData();

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

  return (
    <>
      <GridContainer>{renderGridItems()}</GridContainer>
      {showPagination && (
        <GridFooter>
          <Button
            title="Carregar mais"
            icon="more"
            onClick={fetchPopularMoviesData}
          />
        </GridFooter>
      )}
    </>
  );
};
