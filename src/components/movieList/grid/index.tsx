import { IShortMovieItem } from 'interfaces/favoriteState';

import { MovieCard } from 'components/movieList/card';
import { Button } from 'components/button';

import { GridContainer, GridFooter } from './styles';

interface IMovieGridProps {
  movieList: IShortMovieItem[];
  hidePaginationAction?: boolean;
  onPaginationPress?: () => void;
  searchedQuery?: string;
}

export const MovieGrid = ({
  movieList,
  hidePaginationAction,
  onPaginationPress,
  searchedQuery,
}: IMovieGridProps) => {
  const renderGridItems = () => {
    return movieList.map((item) => {
      return (
        <MovieCard
          key={item?.id}
          movieId={item?.id}
          imageUrl={item?.poster_path}
          movieTitle={item?.title}
          voteAverage={item?.vote_average}
          searchedQuery={searchedQuery}
        />
      );
    });
  };

  return (
    <>
      <GridContainer>{renderGridItems()}</GridContainer>
      {onPaginationPress && !hidePaginationAction && (
        <GridFooter>
          <Button
            title="Carregar mais"
            icon="more"
            onClick={onPaginationPress}
          />
        </GridFooter>
      )}
    </>
  );
};
