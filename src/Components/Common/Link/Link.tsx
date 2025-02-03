import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './Link.module.scss';

type PropsType = {
  link?: string;
  icon: string;
  text: string;
  iconBeforeName?: boolean;
  iconAfterName?: boolean;
};

export const Link: FC<PropsType> = ({ link, icon, text, iconBeforeName, iconAfterName }): ReactElement => {
  return (
    <a className={cn(classes.link, { [classes.notLink]: !link })} href={link} target="_blank" rel="noopener noreferrer">
      {iconBeforeName && <span className={cn(classes.icon, classes.iconBeforeName, icon)} />}
      <span className={cn({ [classes.nameAfterIcon]: iconBeforeName, [classes.nameBeforeIcon]: iconAfterName })}>
        {text}
      </span>
      {iconAfterName && <span className={cn(classes.icon, classes.iconAfterName, icon)} />}
    </a>
  );
};
