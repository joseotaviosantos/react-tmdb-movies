import styled from 'styled-components';

interface IHeaderMenuProps {
  color: 'primary' | 'secondary';
}

export const ButtonContainer = styled.button<IHeaderMenuProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) =>
    color === 'primary' ? '#1877f2' : '#c70000'};
  padding: 20px 40px;
  border-radius: 8px;
  max-width: 300px;
  color: #fff;
  font-weight: 800;
  line-height: 0;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
`;
