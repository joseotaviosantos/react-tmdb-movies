import { IMovieDetailItem } from 'interfaces/movie';

import { Badge } from 'components/badge';
import { Button } from 'components/button';
import { GenresList } from './genresList';

import { formatDate } from 'utils/formatDate';

import { RowContainer } from 'styles/common';
import { Container, Title, Subtitle, Description } from './styles';

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
          {formatDate(release_date)}
        </Description>
      </RowContainer>
      <RowContainer>
        <Description style={{ marginRight: 6 }}>Nota TMDB:</Description>
        <Badge contentValue={vote_average.toFixed(1)} />
      </RowContainer>
      <Subtitle>Sinopse</Subtitle>
      <Description style={{ fontWeight: 300 }}>{overview}</Description>
      <Button
        title="Adicionar aos favoritos"
        icon="heart"
        color="secondary"
        onClick={() => console.log('CLICKED')}
      />
    </Container>
  );
};
