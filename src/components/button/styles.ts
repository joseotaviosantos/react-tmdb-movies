import styled from 'styled-components';

interface IHeaderMenuProps {
  color: 'primary' | 'secondary';
}

export const ButtonContainer = styled.button<IHeaderMenuProps>`
  background-color: ${({ color }) =>
    color === 'primary' ? '#1877f2' : 'transparent'};
  padding: 20px 40px;
  border-radius: 8px;
  color: #fff;
  font-weight: 800;
  line-height: 0;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
`;
