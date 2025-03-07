import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './Error.module.scss';
import error from '../../../../assets/images/error.png';
import error404 from '../../../../assets/images/error404.png';
import { AltTxtKey, ErrorTxtKey } from '../../../../utils/types/enums';

type PropsType = {
  title: string;
  message: string | null;
  isGlobalError?: boolean;
};

export const Error: FC<PropsType> = ({ title, message, isGlobalError = false }): ReactElement => {
  const { t } = useTranslation();

  const image = title === t(ErrorTxtKey.Error) ? error : error404;

  return (
    <div className={cn(classes.error, { [classes.globalError]: isGlobalError })}>
      <h3 className={classes.errorTitle}>{title}</h3>
      <img className={classes.errorImage} src={image} alt={t(AltTxtKey.Error)} />
      <p className={classes.errorMessage}>{message}</p>
    </div>
  );
};
