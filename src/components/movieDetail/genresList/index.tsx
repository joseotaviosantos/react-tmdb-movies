import { IMovieDetailItem } from 'interfaces/movie';

import { RowContainer } from 'styles/common';
import { BadgeContainer } from './styles';

interface IGenreListProps {
  genres: IMovieDetailItem['genres'];
}

export const GenresList = ({ genres }: IGenreListProps) => {
  if (!genres) return <></>;

  const renderList = () => {
    return genres.map((genre) => {
      return <BadgeContainer key={genre.name}>{genre.name}</BadgeContainer>;
    });
  };

  return <RowContainer>{renderList()}</RowContainer>;
};
