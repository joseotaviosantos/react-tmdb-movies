import { useState, useEffect } from 'react';

import { IMovieDetailItem } from 'interfaces/movie';

import { getMovieDetails } from 'services/movieApi';

export const useMovieDetail = (movieId: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [movieDetails, setMovieDetails] = useState<IMovieDetailItem | null>(
    null
  );

  const getMovieDetail = async () => {
    try {
      setIsLoading(true);
      const res = await getMovieDetails(movieId);

      if (res) {
        setMovieDetails(res);
      }
    } catch (error) {
      setError('Error getting movie details');
      console.error('Error on getMovieDetail', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetail();
  }, [movieId]);

  return {
    isLoading,
    error,
    movieDetails,
  };
};
