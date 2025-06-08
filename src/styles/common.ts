import styled from 'styled-components';

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RowContainerSpaced = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 20px;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
