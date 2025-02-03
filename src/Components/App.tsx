import type { FC, ReactElement } from 'react';
import classes from './App.module.scss';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

export const App: FC = (): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
