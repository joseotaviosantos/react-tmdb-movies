import { useNavigate } from 'react-router-dom';

import ClapperboardAltIcon from 'assets/icon/clapperboard-alt-icon';

import { Button } from 'components/button';

import { Container, Title, Subtitle } from './styles';

interface IMovieCardProps {
  movieId: number;
  imageUrl: string;
  movieTitle: string;
  voteAverage: number;
}

export const EmptyList = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ClapperboardAltIcon />
      <Title>Nenhum filme favorito ainda</Title>
      <Subtitle>
        Comece explorando filmes populares e adicione seus favoritos!
      </Subtitle>
      <Button title="Explorar Filmes" onClick={() => navigate('/')} />
    </Container>
  );
};
