import { Badge } from 'components/badge';
import {
  CardContainer,
  CardImageContainer,
  FooterOverlay,
  MovieTitle,
} from './styles';

interface IMovieCardProps {
  imageUrl: string;
  movieTitle: string;
  voteAverage: number;
}

export const MovieCard = ({
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
    </CardContainer>
  );
};
