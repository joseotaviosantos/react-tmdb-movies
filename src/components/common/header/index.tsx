import { HeaderMenu } from '../header-menu';
import { InlineLogo } from '../inline-logo';

import { HeaderContainer, SearchInput } from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <InlineLogo />
      <SearchInput placeholder="Buscar filmes" />
      <HeaderMenu />
    </HeaderContainer>
  );
};
