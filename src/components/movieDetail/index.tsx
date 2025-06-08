import { IMovieDetailItem } from 'interfaces/movie';
import { IShortMovieItem } from 'interfaces/favoriteState';

import { useFavoriteData } from 'hooks/useFavoriteData';

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
  const shortMovieItem: IShortMovieItem = {
    id: id,
    title: title,
    poster_path: poster_path,
    vote_average: vote_average,
  };

  const { isFavorited, onFavoritePress } = useFavoriteData(shortMovieItem);

  const buttonText = isFavorited
    ? 'Remover dos favoritos'
    : 'Adicionar aos favoritos';

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
        title={buttonText}
        icon="heart"
        color="secondary"
        onClick={onFavoritePress}
      />
    </Container>
  );
};
