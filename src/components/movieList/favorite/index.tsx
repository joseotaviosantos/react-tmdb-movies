import { useDispatch } from 'react-redux';

import type { AppDispatch } from 'store';

import HeartFilledIcon from 'assets/icon/heart-filled-icon';
import HeartOutlinedIcon from 'assets/icon/heart-outlined-icon';

import { FavoriteContainer } from './styles';

interface IFavoriteActionProps {
  isFavorited: boolean;
  itemId?: string;
}

export const FavoriteAction = ({
  isFavorited = false,
  itemId,
}: IFavoriteActionProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <FavoriteContainer>
      {isFavorited ? <HeartFilledIcon /> : <HeartOutlinedIcon />}
    </FavoriteContainer>
  );
};
