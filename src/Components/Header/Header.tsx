import type { FC, ReactElement } from 'react';
import classes from './Header.module.scss';
import { Navigation } from '../Common/Navigation/Navigation';
import { LanguageButton } from '../Common/Buttons/LanguageButton/LanguageButton';

export const Header: FC = (): ReactElement => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <Navigation />
        <LanguageButton />
      </div>
    </header>
  );
};
