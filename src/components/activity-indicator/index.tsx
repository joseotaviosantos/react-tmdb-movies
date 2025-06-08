import { ScaleLoader } from 'react-spinners';

import { LoadingContainer } from './styles';

export const ActivityIndicator = () => {
  return (
    <LoadingContainer>
      <ScaleLoader color="#ff5900" />
    </LoadingContainer>
  );
};
