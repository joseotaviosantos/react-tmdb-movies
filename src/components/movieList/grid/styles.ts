import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  padding: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export const GridFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;
