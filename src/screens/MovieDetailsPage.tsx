import { useParams } from 'react-router-dom';

import { useMovieDetail } from 'hooks/useMovieDetail';

import { MovieDetailLayout } from 'components/layout';
import { Backdrop } from 'components/backdrop';
import { MovieDetail } from 'components/movieDetail';
import { ActivityIndicator } from 'components/activity-indicator';

export const MovieDetailsPage = () => {
  const { id } = useParams();

  if (!id) return <></>;

  const { isLoading, error, movieDetails } = useMovieDetail(id);

  if (isLoading) return <ActivityIndicator />;

  if (!movieDetails || error) return <></>;

  const {
    id: movieId,
    title,
    genres,
    overview,
    backdrop_path,
    poster_path,
    release_date,
    vote_average,
  } = movieDetails;

  return (
    <MovieDetailLayout
      backdrop={<Backdrop imageUrl={backdrop_path || ''} />}
      content={
        <MovieDetail
          title={title}
          id={movieId}
          genres={genres}
          overview={overview}
          poster_path={poster_path}
          release_date={release_date}
          vote_average={vote_average}
        />
      }
    />
  );
};
