import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './Error.module.scss';
import error from '../../../../assets/images/error.png';
import error404 from '../../../../assets/images/error404.png';

type PropsType = {
  title: string;
  message: string | null;
  isGlobalError?: boolean;
};

export const Error: FC<PropsType> = ({ title, message, isGlobalError = false }): ReactElement => {
  const image = title === 'Error' ? error : error404;

  return (
    <div className={cn(classes.error, { [classes.globalError]: isGlobalError })}>
      <h3 className={classes.errorTitle}>{title}</h3>
      <img className={classes.errorImage} src={image} alt="Error" />
      <p className={classes.errorMessage}>{message}</p>
    </div>
  );
};
