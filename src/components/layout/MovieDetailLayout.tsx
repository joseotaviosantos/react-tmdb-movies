import { ReactNode } from 'react';

import { RowContainerSpaced } from 'styles/common';

interface IMovieDetailLayout {
  backdrop: ReactNode;
  content: ReactNode;
}

export const MovieDetailLayout = ({
  backdrop,
  content,
}: IMovieDetailLayout) => {
  return (
    <RowContainerSpaced>
      {backdrop}
      {content}
    </RowContainerSpaced>
  );
};
