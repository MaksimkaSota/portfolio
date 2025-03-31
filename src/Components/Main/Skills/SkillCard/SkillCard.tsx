import type { ElementType, FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './SkillCard.module.scss';
import { Image } from '../../../Common/Image/Image';
import { AltTxtKey } from '../../../../utils/types/enums';

type PropsType = {
  name: string;
  className: string;
  LogoMin: ElementType;
  logoMax: string;
};

export const SkillCard: FC<PropsType> = ({ name, className, LogoMin, logoMax }): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={cn(classes.skillCard, className)}>
      <Image
        ImageSVG={LogoMin}
        image={logoMax}
        altTxt={t(AltTxtKey.Logo)}
        classNameContainer={classes.logoContainer}
        classNameImageMax={classes.logo}
      />
      <p className={classes.name}>{name}</p>
    </div>
  );
};
