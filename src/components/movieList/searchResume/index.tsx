import { RowContainer } from 'styles/common';
import { Container, Title, Subtitle, Counter } from './styles';

interface ISearchResumeProps {
  searchedQuery: string | null;
  resultsCount: number;
}

export const SearchResume = ({
  searchedQuery,
  resultsCount,
}: ISearchResumeProps) => {
  return (
    <Container>
      <RowContainer>
        <Title>Resultados para: </Title>
        <Counter>{`"${searchedQuery}"`}</Counter>
      </RowContainer>
      <Subtitle>{`Encontrados ${resultsCount} filmes`}</Subtitle>
    </Container>
  );
};
