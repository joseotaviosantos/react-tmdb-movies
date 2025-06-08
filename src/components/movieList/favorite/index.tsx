import { IShortMovieItem } from 'interfaces/favoriteState';

import { useFavoriteData } from 'hooks/useFavoriteData';

import HeartFilledIcon from 'assets/icon/heart-filled-icon';
import HeartOutlinedIcon from 'assets/icon/heart-outlined-icon';

import { FavoriteContainer } from './styles';

interface IFavoriteActionProps {
  movieItem: IShortMovieItem;
}

export const FavoriteAction = ({ movieItem }: IFavoriteActionProps) => {
  const { isFavorited, onFavoritePress } = useFavoriteData(movieItem);

  return (
    <FavoriteContainer onClick={onFavoritePress}>
      {isFavorited ? <HeartFilledIcon /> : <HeartOutlinedIcon />}
    </FavoriteContainer>
  );
};
