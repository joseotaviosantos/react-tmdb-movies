import { ReactNode } from 'react';
import { Header } from '../common/header';

interface IRootLayout {
  children: ReactNode;
}

export const RootLayout = ({ children }: IRootLayout) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};
