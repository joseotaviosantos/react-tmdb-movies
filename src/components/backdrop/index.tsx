import { BackdropContainer } from './styles';

interface IBackdropProps {
  imageUrl: string;
}

export const Backdrop = ({ imageUrl }: IBackdropProps) => {
  if (!imageUrl) return <></>;

  return (
    <BackdropContainer
      src={`${process.env.REACT_APP_TMDB_BASE_BACKDROP}${imageUrl}` || ''}
    />
  );
};
