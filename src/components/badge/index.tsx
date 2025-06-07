import { BadgeContainer } from './styles';

interface IBadgeProps {
  contentValue: string | number;
}

export const Badge = ({ contentValue }: IBadgeProps) => {
  if (!contentValue) return <></>;

  return <BadgeContainer>{contentValue}</BadgeContainer>;
};
