import { SortOption, SortSelector } from 'components/sortSelector';

import { RowContainer } from 'styles/common';
import { Container, Title, Subtitle } from './styles';

interface IFavoriteHeaderProps {
  selectedSorter: SortOption;
  setSelectedSorter: (value: SortOption) => void;
}

export const FavoriteHeader = ({
  selectedSorter,
  setSelectedSorter,
}: IFavoriteHeaderProps) => {
  return (
    <Container>
      <Title>Meus filmes favoritos</Title>
      <RowContainer>
        <Subtitle>{'Ordenar por: '}</Subtitle>
        <SortSelector
          value={selectedSorter}
          onChange={(value) => setSelectedSorter(value)}
        />
      </RowContainer>
    </Container>
  );
};
