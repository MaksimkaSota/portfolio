import type { Dispatch, FC, ReactElement, SetStateAction } from 'react';
import cn from 'classnames';
import classes from './BurgerButton.module.scss';

type PropsType = {
  showBurgerMenu: boolean;
  setShowBurgerMenu: Dispatch<SetStateAction<boolean>>;
};

export const BurgerButton: FC<PropsType> = ({ showBurgerMenu, setShowBurgerMenu }): ReactElement => {
  const onButtonClick = (): void => {
    setShowBurgerMenu((prevActualState: boolean): boolean => !prevActualState);
  };

  return (
    <button
      aria-label="Burger button"
      className={cn(classes.burger, { [classes.crossedOutBurger]: showBurgerMenu })}
      onClick={onButtonClick}
    >
      <span className={cn(classes.rectangle, classes.rectangle1)} />
      <span className={cn(classes.rectangle, classes.rectangle2)} />
      <span className={cn(classes.rectangle, classes.rectangle3)} />
    </button>
  );
};
