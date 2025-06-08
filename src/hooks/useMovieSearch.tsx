import { useState, useEffect } from 'react';

import { IMovieItem } from 'interfaces/movie';

import { getMoviesByQuery } from 'services/movieApi';

interface IMovieMeta {
  page: number;
  totalResults: number;
}

export const useMovieSearch = (query: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [movieList, setMovieList] = useState<IMovieItem[]>([]);
  const [movieMeta, setMovieMeta] = useState<IMovieMeta>();

  const getMovieList = async () => {
    try {
      setIsLoading(true);
      const res = await getMoviesByQuery(query);

      if (res) {
        setMovieList(res.results);
        setMovieMeta({ page: res.page, totalResults: res.total_results });
      }
    } catch (error) {
      setError('Error getting movie list');
      console.error('Error on getMovieList', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateMovieList = async () => {
    const metaPage = movieMeta?.page ? movieMeta.page + 1 : 1;
    try {
      setIsLoading(true);
      const res = await getMoviesByQuery(query, metaPage);

      if (res) {
        setMovieList((state) => [...state, ...res.results]);
        setMovieMeta({ page: res.page, totalResults: res.total_results });
      }
    } catch (error) {
      setError('Error updating movie list');
      console.error('Error on updateMovieList', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovieList();
  }, [query]);

  return {
    isLoading,
    error,
    movieList,
    movieMeta,
    updateMovieList,
  };
};
