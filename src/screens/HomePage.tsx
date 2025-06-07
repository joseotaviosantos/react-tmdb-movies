import { useEffect, useState } from 'react';

import { getPopularMovies } from 'services/movieApi';

export const HomePage = () => {
  const [resultsPage, setResultsPage] = useState(1);
  useEffect(() => {
    const getPopularMoviesData = async () => {
      const res = await getPopularMovies(resultsPage);
      console.log('RES', res);
    };

    getPopularMoviesData();
  }, []);
  return <div>HomePage</div>;
};
