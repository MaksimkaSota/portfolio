import type { FC, ReactElement } from 'react';
import classes from './Navigation.module.scss';

export const Navigation: FC = (): ReactElement => {
  return (
    <nav className={classes.navigation}>
      <button className={classes.link}>About me</button>
      <button className={classes.link}>Skills</button>
      <button className={classes.link}>Projects</button>
      <button className={classes.link}>Contacts</button>
    </nav>
  );
};
