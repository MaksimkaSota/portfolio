import type { FC, ReactElement, ReactNode } from 'react';
import cn from 'classnames';
import classes from './Contact.module.scss';

type PropsType = {
  icon: string;
  name: string;
  text?: string;
  link?: string;
  children?: ReactNode;
};

export const Contact: FC<PropsType> = ({ icon, name, text, link, children }): ReactElement => {
  return (
    <div className={classes.contact}>
      <p className={cn(classes.icon, icon)} />
      <p className={classes.name}>{name}</p>
      {text && <p className={classes.text}>{text}</p>}
      {link && (
        <a className={classes.link} href={`mailto:${link}`}>
          {link}
        </a>
      )}
      {children}
    </div>
  );
};
