import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import classes from './NotFound.module.scss';
import { Error } from '../../Common/Errors/Error/Error';
import { ContentTxtKey, ErrorTxtKey } from '../../../utils/types/enums';

export const NotFound: FC = (): ReactElement => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <div className={classes.notFound}>
      <div className={classes.wrapper}>
        <Error title={t(ContentTxtKey.NotFoundTitle)} message={t(ErrorTxtKey.NotFound, { pathname })} />
      </div>
    </div>
  );
};
