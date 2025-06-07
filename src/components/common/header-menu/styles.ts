import styled from 'styled-components';

interface IHeaderMenuProps {
  isSelected: boolean;
}

export const MenuBtn = styled.button<IHeaderMenuProps>`
  background-color: red;
  padding: 10px 16px;
  border-radius: 8px;
  background-color: ${({ isSelected }) =>
    isSelected ? '#1877f2' : 'transparent'};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#1877f2')};
`;
