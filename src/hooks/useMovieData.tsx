import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from 'store';
import {
  setMoviesList,
  updateMoviesList,
  setFetchError,
} from 'store/slices/movieSlice';

import { getPopularMovies } from 'services/movieApi';

export const useMovieData = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const popularMoviesState = useSelector(
    (state: RootState) => state.popularMovies
  );

  const getPopularMoviesData = async (page: number) => {
    try {
      setIsLoading(true);
      const res = await getPopularMovies(page);

      if (res) {
        dispatch(setMoviesList(res));
      }
    } catch (error) {
      dispatch(setFetchError('Error getting popular movies'));
      console.error('Error on getPopularMoviesData', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPopularMoviesData = async () => {
    const currentPage = popularMoviesState.page;

    try {
      setIsLoading(true);
      const res = await getPopularMovies(currentPage + 1);

      if (res) {
        dispatch(updateMoviesList(res));
      }
    } catch (error) {
      dispatch(setFetchError('Error fetching popular movies'));
      console.error('Error on fetchPopularMoviesData', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    popularMoviesState,
    getPopularMoviesData,
    fetchPopularMoviesData,
  };
};
