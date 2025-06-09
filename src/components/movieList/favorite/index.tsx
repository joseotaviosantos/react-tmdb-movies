import { useLocation } from 'react-router-dom';

import { IShortMovieItem } from 'interfaces/favoriteState';

import { useFavoriteData } from 'hooks/useFavoriteData';

import HeartFilledIcon from 'assets/icon/heart-filled-icon';
import HeartOutlinedIcon from 'assets/icon/heart-outlined-icon';
import TrashIcon from 'assets/icon/trash-icon';

import { FavoriteContainer } from './styles';

interface IFavoriteActionProps {
  movieItem: IShortMovieItem;
}

export const FavoriteAction = ({ movieItem }: IFavoriteActionProps) => {
  const location = useLocation();

  const { isFavorited, onFavoritePress } = useFavoriteData(movieItem);

  const renderIcon = () => {
    if (location.pathname === '/favorites') {
      return <TrashIcon />;
    }

    return isFavorited ? <HeartFilledIcon /> : <HeartOutlinedIcon />;
  };

  return (
    <FavoriteContainer onClick={onFavoritePress}>
      {renderIcon()}
    </FavoriteContainer>
  );
};
