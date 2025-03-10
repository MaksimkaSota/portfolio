import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './SkillCard.module.scss';
import { AltTxtKey } from '../../../../utils/types/enums';

type PropsType = {
  name: string;
  className: string;
  logo: string;
};

export const SkillCard: FC<PropsType> = ({ name, className, logo }): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={cn(classes.skillCard, className)}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt={t(AltTxtKey.Logo)} />
      </div>
      <p className={classes.name}>{name}</p>
    </div>
  );
};
