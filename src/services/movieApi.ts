import api from './apiConfig';

import { IGetPopularMoviesRes } from 'interfaces/movieApi';

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
