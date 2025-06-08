import { Badge } from 'components/badge';
import { FavoriteAction } from '../favorite';

import {
  CardContainer,
  CardImageContainer,
  FooterOverlay,
  MovieTitle,
} from './styles';

interface IMovieCardProps {
  movieId: number;
  imageUrl: string;
  movieTitle: string;
  voteAverage: string;
}

export const MovieCard = ({
  movieId,
  imageUrl,
  movieTitle,
  voteAverage,
}: IMovieCardProps) => {
  return (
    <CardContainer>
      <CardImageContainer
        src={`${process.env.REACT_APP_TMDB_BASE_IMAGE}${imageUrl}` || ''}
      />
      <FooterOverlay>
        <MovieTitle>{movieTitle || ''}</MovieTitle>
        <Badge contentValue={voteAverage} />
      </FooterOverlay>
      <FavoriteAction
        movieItem={{
          id: movieId,
          title: movieTitle,
          poster_path: imageUrl,
          vote_average: voteAverage,
        }}
      />
    </CardContainer>
  );
};
