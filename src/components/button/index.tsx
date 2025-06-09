import HeartFilledIcon from 'assets/icon/heart-filled-icon';
import ChevronDownIcon from 'assets/icon/chevron-down-icon';

import { RowContainer } from 'styles/common';
import { ButtonContainer, IconContainer } from './styles';

interface IButtonProps {
  title: string;
  icon?: 'more' | 'heart';
  color?: 'primary' | 'secondary';
  onClick: (e: React.MouseEvent) => void;
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
            {icon === 'heart' ? (
              <HeartFilledIcon inverted />
            ) : (
              <ChevronDownIcon />
            )}
          </IconContainer>
        )}
        {title}
      </RowContainer>
    </ButtonContainer>
  );
};
