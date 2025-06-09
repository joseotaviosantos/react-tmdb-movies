import { useNavigate } from 'react-router-dom';
import { Badge } from 'components/badge';
import { FavoriteAction } from '../favorite';

import {
  CardContainer,
  CardImageContainer,
  FooterOverlay,
  MovieTitle,
  Highlight,
} from './styles';

interface IMovieCardProps {
  movieId: number;
  imageUrl: string;
  movieTitle: string;
  voteAverage: number;
  searchedQuery?: string;
}

export const MovieCard = ({
  movieId,
  imageUrl,
  movieTitle,
  voteAverage,
  searchedQuery,
}: IMovieCardProps) => {
  const navigate = useNavigate();

  const getMovieTitle = () => {
    if (!movieTitle) return '';

    if (!searchedQuery) return movieTitle;

    const titleParts = movieTitle.split(/(\W+)/);

    return titleParts.map((part) => {
      const isHighlighted =
        part.toLowerCase() === searchedQuery?.toLowerCase() ||
        part.toLowerCase().includes(searchedQuery?.toLowerCase());

      return <>{isHighlighted ? <Highlight>{part}</Highlight> : part}</>;
    });
  };

  return (
    <CardContainer
      data-testid={'MovieCard_Container'}
      onClick={() => navigate(`/movieDetails/${movieId}`)}
    >
      <CardImageContainer
        src={`${process.env.REACT_APP_TMDB_BASE_POSTER}${imageUrl}` || ''}
      />
      <FooterOverlay>
        <MovieTitle>{getMovieTitle()}</MovieTitle>
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
