import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './Error.module.scss';
import { Image } from '../../Image/Image';
import ErrorMin from '../../../../assets/images/error.svg';
import errorMax from '../../../../assets/images/error.png';
import Error404Min from '../../../../assets/images/error404.svg';
import error404Max from '../../../../assets/images/error404.png';
import { AltTxtKey, ErrorTxtKey } from '../../../../utils/types/enums';

type PropsType = {
  title: string;
  message: string | null;
  isGlobalError?: boolean;
};

export const Error: FC<PropsType> = ({ title, message, isGlobalError = false }): ReactElement => {
  const { t } = useTranslation();

  const ImageMin = title === t(ErrorTxtKey.Error) ? ErrorMin : Error404Min;
  const imageMax = title === t(ErrorTxtKey.Error) ? errorMax : error404Max;

  return (
    <div className={cn(classes.error, { [classes.globalError]: isGlobalError })}>
      <h3 className={classes.errorTitle}>{title}</h3>
      <Image
        ImageSVG={ImageMin}
        image={imageMax}
        classNameContainer={classes.errorImageContainer}
        altTxt={t(AltTxtKey.Error)}
      />
      <p className={classes.errorMessage}>{message}</p>
    </div>
  );
};
