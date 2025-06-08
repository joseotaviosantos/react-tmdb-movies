import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderMenu } from '../header-menu';
import { InlineLogo } from '../inline-logo';

import { HeaderContainer, SearchInput } from './styles';

export const Header = () => {
  const navigate = useNavigate();

  const [queryTerm, setQueryTerm] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryTerm(e.target.value);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/search?q=${encodeURIComponent(queryTerm)}`);
    }
  };

  return (
    <HeaderContainer>
      <InlineLogo />
      <SearchInput
        placeholder="Buscar filmes"
        value={queryTerm}
        onChange={handleInputChange}
        onKeyDown={onKeyPress}
      />
      <HeaderMenu />
    </HeaderContainer>
  );
};
