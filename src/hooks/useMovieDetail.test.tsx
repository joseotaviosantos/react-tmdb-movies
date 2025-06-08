import { renderHook, waitFor } from '@testing-library/react';
import { useMovieDetail } from './useMovieDetail';
import { getMovieDetails } from 'services/movieApi';

import { makeMovieMock } from 'utils/testUtils';

jest.mock('services/movieApi', () => ({
  getMovieDetails: jest.fn(),
}));

const mockedGetMovieDetails = getMovieDetails as jest.Mock;

describe('useMovieDetail', () => {
  const movieId = '9999901';
  const mockedRes = makeMovieMock();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch movie details', async () => {
    mockedGetMovieDetails.mockResolvedValueOnce(mockedRes);

    const { result } = renderHook(() => useMovieDetail(movieId));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBe('');
      expect(result.current.movieDetails).toBe(mockedRes);
    });
  });

  it('should handle api error and show message', async () => {
    mockedGetMovieDetails.mockRejectedValueOnce(
      new Error('Error getting movie details')
    );

    const { result } = renderHook(() => useMovieDetail(movieId));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBe('Error getting movie details');
      expect(result.current.movieDetails).toBeNull();
    });
  });
});
