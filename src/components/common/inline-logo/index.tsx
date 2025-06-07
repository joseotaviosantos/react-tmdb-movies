import CameraIcon from 'assets/icon/clapperboard-icon';

import { LogoText } from './styles';

import { RowContainer } from 'styles/common';

export const InlineLogo = () => {
  return (
    <RowContainer>
      <CameraIcon />
      <LogoText>MovieDB</LogoText>
    </RowContainer>
  );
};
