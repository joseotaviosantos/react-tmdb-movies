import { useNavigate, useLocation } from 'react-router-dom';

import { MenuBtn } from './styles';

import { RowContainer } from 'styles/common';

export const HeaderMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <RowContainer>
      <MenuBtn
        isSelected={location.pathname === '/'}
        onClick={() => navigate('/')}
      >
        Home
      </MenuBtn>
      <MenuBtn
        isSelected={location.pathname === '/favorites'}
        onClick={() => navigate('/favorites')}
      >
        Favoritos
      </MenuBtn>
    </RowContainer>
  );
};
