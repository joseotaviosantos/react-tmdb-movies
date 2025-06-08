import { IMovieDetailItem } from 'interfaces/movie';

import { GenresList } from './genresList';

import { RowContainer } from 'styles/common';
import { Container, Title, Description } from './styles';

interface IMovieDetailProps
  extends Pick<
    IMovieDetailItem,
    | 'id'
    | 'title'
    | 'genres'
    | 'release_date'
    | 'vote_average'
    | 'overview'
    | 'poster_path'
  > {}

export const MovieDetail = ({
  id,
  title,
  genres,
  overview,
  poster_path,
  release_date,
  vote_average,
}: IMovieDetailProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <GenresList genres={genres} />
      <RowContainer>
        <Description>Data do lançamento:</Description>
        <Description style={{ fontWeight: 300, marginLeft: 4 }}>
          {release_date}
        </Description>
      </RowContainer>
    </Container>
  );
};
