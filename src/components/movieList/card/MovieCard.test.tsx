import { screen, fireEvent } from '@testing-library/react';

import { renderWithProviders, makeMovieMock } from 'utils/testUtils';

import { MovieCard } from '.';

const movieMock: any = makeMovieMock();

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

const makeSut = () => {
  return renderWithProviders(<MovieCard {...movieMock} />);
};

describe('Movie card component', () => {
  it('should render movie card with correct props', () => {
    makeSut();

    const image = screen.getByRole('img');
    const movieTitle = screen.getByText('Test Movie 1');
    const averageBadge = screen.getByText('5.9');

    expect(image).toBeInTheDocument();
    expect(movieTitle).toBeInTheDocument();
    expect(averageBadge).toBeInTheDocument();
  });

  it('should navigate with correct id', () => {
    const { getByTestId } = makeSut();

    const movieCard = getByTestId('MovieCard_Container');

    fireEvent.click(movieCard);
    expect(mockNavigate).toHaveBeenCalledWith('/movieDetails/999901');
  });
});
