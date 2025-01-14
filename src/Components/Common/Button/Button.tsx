import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './Button.module.scss';

type PropsType = {
  text: string;
  className?: string;
  onClick?: () => void;
};

export const Button: FC<PropsType> = ({ text, className, onClick }): ReactElement => {
  return (
    <button className={cn(classes.button, className)} onClick={onClick}>
      {text}
    </button>
  );
};
