import api from './apiConfig';

import { IGetMoviesRes, IGetMovieDetailRes } from 'interfaces/movieApi';

export const getPopularMovies = async (
  pageNumber: number
): Promise<IGetMoviesRes> => {
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

export const getMoviesByQuery = async (
  query: string,
  page?: number
): Promise<IGetMoviesRes> => {
  try {
    const pageParam = page ?? 1;
    const response = await api.get(
      `/search/movie?query=${query}&page=${pageParam}`
    );

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
