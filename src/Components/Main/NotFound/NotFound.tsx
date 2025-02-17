import type { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './NotFound.module.scss';
import { Error } from '../../Common/Errors/Error/Error';

export const NotFound: FC = (): ReactElement => {
  const { pathname } = useLocation();

  return (
    <div className={classes.notFound}>
      <div className={classes.wrapper}>
        <Error title="Page not found" message={`The requested URL "${pathname}" was not found on this server!`} />
      </div>
    </div>
  );
};
