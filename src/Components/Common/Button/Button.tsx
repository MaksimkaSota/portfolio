import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './Button.module.scss';
import { ElementName } from '../../../utils/enums';

type PropsType = {
  text: string;
  type?: ElementName.TypeButton | ElementName.TypeSubmit | ElementName.TypeReset;
  className: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: FC<PropsType> = ({
  text,
  type = ElementName.TypeButton,
  className,
  onClick,
  disabled,
}): ReactElement => {
  return (
    <button type={type} className={cn(classes.button, className)} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
