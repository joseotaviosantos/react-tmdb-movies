import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const SearchInput = styled.input`
  height: 36px;
  max-width: 32rem;
  margin: 0px 10px;
  padding: 0px 20px;
  border-radius: 20px;
  background-color: #ffffff10;
  color: #fff;
  flex-grow: 1;
`;
