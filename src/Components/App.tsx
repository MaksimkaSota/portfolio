import type { FC, ReactElement } from 'react';
import classes from './App.module.scss'

export const App: FC = (): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>My portfolio</h1>
      <p className={classes.text}>Hello World, I am Maksim Sotnikov</p>
    </div>
  );
}
