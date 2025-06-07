import CameraIcon from 'assets/icon/clapperboard-icon';

import { MenuBtn } from './styles';

import { RowContainer } from 'styles/common';

export const HeaderMenu = () => {
  const onMenuItemPress = (id: string) => {
    console.log('MENU PRESSED!', id);
  };

  return (
    <RowContainer>
      <MenuBtn isSelected onClick={() => onMenuItemPress('home')}>
        Home
      </MenuBtn>
      <MenuBtn isSelected={false} onClick={() => onMenuItemPress('favoritos')}>
        Favoritos
      </MenuBtn>
    </RowContainer>
  );
};
