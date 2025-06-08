import { useNavigate } from 'react-router-dom';
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
  voteAverage: number;
}

export const MovieCard = ({
  movieId,
  imageUrl,
  movieTitle,
  voteAverage,
}: IMovieCardProps) => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`movieDetails/${movieId}`)}>
      <CardImageContainer
        src={`${process.env.REACT_APP_TMDB_BASE_POSTER}${imageUrl}` || ''}
      />
      <FooterOverlay>
        <MovieTitle>{movieTitle || ''}</MovieTitle>
        <Badge contentValue={voteAverage.toFixed(1)} />
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
