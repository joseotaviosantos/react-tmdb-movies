import styled from 'styled-components';

export const BackdropContainer = styled.img`
  width: 50%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
