import { useParams } from 'react-router-dom';

import { useMovieDetail } from 'hooks/useMovieDetail';

export const MovieDetailsPage = () => {
  const { id } = useParams();

  if (!id) return <></>;

  const { isLoading, error, movieDetails } = useMovieDetail(id);

  return <div>MovieDetailsPage</div>;
};
