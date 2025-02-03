import type { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './NotFound.module.scss';
import error from '../../../assets/images/error.png';

export const NotFound: FC = (): ReactElement => {
  const { pathname } = useLocation();

  return (
    <div className={classes.notFound}>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>Page not found</h3>
        <img className={classes.image} src={error} alt="Error" />
        <p className={classes.text}>
          The requested URL <span className={classes.pathname}>{pathname}</span> was not found on this server!
        </p>
      </div>
    </div>
  );
};
