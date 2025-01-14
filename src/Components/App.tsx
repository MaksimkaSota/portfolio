import type { FC, ReactElement } from 'react';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

export const App: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};
