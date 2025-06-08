import api from './apiConfig';

import { IGetPopularMoviesRes, IGetMovieDetailRes } from 'interfaces/movieApi';

export const getPopularMovies = async (
  pageNumber: number
): Promise<IGetPopularMoviesRes> => {
  try {
    const response = await api.get(`/movie/popular`, {
      params: {
        page: pageNumber,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (
  movieId: string
): Promise<IGetMovieDetailRes> => {
  try {
    const response = await api.get(`/movie/${movieId}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};
