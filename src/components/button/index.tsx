import HeartFilledIcon from 'assets/icon/heart-filled-icon';
import MoreIcon from 'assets/icon/more-icon';

import { RowContainer } from 'styles/common';
import { ButtonContainer, IconContainer } from './styles';

interface IButtonProps {
  title: string;
  icon?: 'more' | 'heart';
  color?: 'primary' | 'secondary';
  onClick: () => void;
}

export const Button = ({
  title,
  icon,
  color = 'primary',
  onClick,
}: IButtonProps) => {
  if (!title) return <></>;

  return (
    <ButtonContainer color={color} onClick={onClick}>
      <RowContainer>
        {icon && (
          <IconContainer>
            {icon === 'heart' ? <HeartFilledIcon inverted /> : <MoreIcon />}
          </IconContainer>
        )}
        {title}
      </RowContainer>
    </ButtonContainer>
  );
};
