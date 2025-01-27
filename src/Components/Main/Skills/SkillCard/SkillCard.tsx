import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './SkillCard.module.scss';

type PropsType = {
  name: string;
  className: string;
  logo: string;
};

export const SkillCard: FC<PropsType> = ({ name, className, logo }): ReactElement => {
  return (
    <div className={cn(classes.skillCard, className)}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="Logo" />
      </div>
      <p className={classes.name}>{name}</p>
    </div>
  );
};
