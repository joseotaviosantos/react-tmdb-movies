import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'store';

export const renderWithProviders = (
  children: React.ReactElement,
  renderOptions?: RenderOptions
) => {
  return render(<Provider store={store}>{children}</Provider>, renderOptions);
};
