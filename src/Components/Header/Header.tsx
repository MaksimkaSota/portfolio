import { type FC, type ReactElement, useState } from 'react';
import classes from './Header.module.scss';
import { Navigation } from '../Common/Navigation/Navigation';
import { BurgerButton } from '../Common/Buttons/BurgerButton/BurgerButton';
import { LanguageButton } from '../Common/Buttons/LanguageButton/LanguageButton';

export const Header: FC = (): ReactElement => {
  const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false);

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <Navigation showBurgerMenu={showBurgerMenu} setShowBurgerMenu={setShowBurgerMenu} />
        <BurgerButton showBurgerMenu={showBurgerMenu} setShowBurgerMenu={setShowBurgerMenu} />
        <LanguageButton />
      </div>
    </header>
  );
};
