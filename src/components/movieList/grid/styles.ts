import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;
