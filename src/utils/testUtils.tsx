import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'store';

import { IShortMovieItem } from 'interfaces/favoriteState';

export const renderWithProviders = (
  children: React.ReactElement,
  renderOptions?: RenderOptions
) => {
  return render(<Provider store={store}>{children}</Provider>, renderOptions);
};

export const makeMovieMock = (
  type: 'simple' | 'list' = 'simple',
  qtd?: number
) => {
  const movieMock = {
    movieId: 999901,
    imageUrl: '/mockUrl1.jpg',
    movieTitle: 'Test Movie 1',
    voteAverage: 5.87,
  };

  if (type === 'simple') return movieMock;

  const movieMockList = [];

  if (qtd) {
    let mockIdNumber = 999900;

    for (let i = 0; i < qtd; i++) {
      const mockObj = {
        id: mockIdNumber + 1,
        poster_path: `/mockUrl${i + 1}.jpg`,
        title: `Test Movie ${i + 1}`,
        vote_average: 5.87,
      };

      mockIdNumber += 1;
      movieMockList.push(mockObj);
    }
  }

  return movieMockList;
};
