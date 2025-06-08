import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from 'store';
import { setFavorite, removeFavorite } from 'store/slices/favoriteSlice';

import { IShortMovieItem } from 'interfaces/favoriteState';

import HeartFilledIcon from 'assets/icon/heart-filled-icon';
import HeartOutlinedIcon from 'assets/icon/heart-outlined-icon';

import { FavoriteContainer } from './styles';

interface IFavoriteActionProps {
  movieItem: IShortMovieItem;
}

export const FavoriteAction = ({ movieItem }: IFavoriteActionProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const favoritesState = useSelector((state: RootState) => state.favorites);

  const isFavorited = favoritesState.favoriteList.find(
    (item) => item.id === movieItem.id
  );

  const onFavoritePress = () => {
    if (!movieItem.id) return;

    if (!isFavorited) {
      return dispatch(setFavorite(movieItem));
    }

    return dispatch(removeFavorite(movieItem));
  };

  return (
    <FavoriteContainer onClick={onFavoritePress}>
      {isFavorited ? <HeartFilledIcon /> : <HeartOutlinedIcon />}
    </FavoriteContainer>
  );
};
