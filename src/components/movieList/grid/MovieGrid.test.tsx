import { screen, fireEvent } from '@testing-library/react';

import { renderWithProviders, makeMovieMock } from 'utils/testUtils';

import { MovieGrid } from '.';

const mockPaginationPress = jest.fn();

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  useLocation: () => ({
    pathname: '/favorites',
  }),
}));

const makeSut = (movieList: any, hidePaginationAction: any) => {
  return renderWithProviders(
    <MovieGrid
      movieList={movieList}
      hidePaginationAction={hidePaginationAction}
      onPaginationPress={mockPaginationPress}
    />
  );
};

describe('Movie card component', () => {
  it('should render a list of movie cards', () => {
    const movieListMock: any = makeMovieMock('list', 20);
    const { getAllByTestId } = makeSut(movieListMock, true);

    const movieCards = getAllByTestId('MovieCard_Container');
    expect(movieCards).toHaveLength(20);

    const lastCardItem = screen.getByText('Test Movie 20');
    expect(lastCardItem).toBeInTheDocument();
  });

  it('should navigate when pressed a item in a half list', () => {
    const movieListMock: any = makeMovieMock('list', 30);
    const { getAllByTestId } = makeSut(movieListMock, true);

    const movieCards = getAllByTestId('MovieCard_Container');
    fireEvent.click(movieCards[14]);
    expect(mockNavigate).toHaveBeenCalledWith('/movieDetails/999915');
  });

  it('should fire onPaginationPress when button is pressed', () => {
    const movieListMock: any = makeMovieMock('list', 10);
    const { getByText } = makeSut(movieListMock, false);

    const gridButton = getByText('DESCOBRIR MAIS');
    fireEvent.click(gridButton);
    expect(mockPaginationPress).toHaveBeenCalled();
  });
});
