import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from 'store';
import { setMoviesList, setFetchError } from 'store/slices/movieSlice';

import { getPopularMovies } from 'services/movieApi';

import { MovieCard } from 'components/movieList/card';

export const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const popularMoviesState = useSelector(
    (state: RootState) => state.popularMovies
  );

  useEffect(() => {
    const getPopularMoviesData = async () => {
      try {
        const res = await getPopularMovies(1);

        if (res) {
          dispatch(setMoviesList(res));
        }
      } catch (error) {
        dispatch(setFetchError('Error fetching popular movies'));
        console.log('ERR', error);
      }
    };

    getPopularMoviesData();
  }, []);

  return (
    <>
      {popularMoviesState.results.map((item) => (
        <MovieCard
          imageUrl={item?.poster_path}
          movieTitle={item?.title}
          voteAverage={item?.vote_average}
        />
      ))}
    </>
  );
};
