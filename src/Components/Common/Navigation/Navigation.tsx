import type { Dispatch, FC, MouseEvent, ReactElement, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import classes from './Navigation.module.scss';
import { RoutePath } from '../../../utils/types/enums';

type PropsType = {
  showBurgerMenu: boolean;
  setShowBurgerMenu: Dispatch<SetStateAction<boolean>>;
};

export const Navigation: FC<PropsType> = ({ showBurgerMenu, setShowBurgerMenu }): ReactElement => {
  const setClass = ({ isActive }: { isActive: boolean }): string =>
    cn(classes.link, { [classes.activeLink]: isActive });

  const onLinkClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    if ((event.target as Element).className === classes.link) {
      setShowBurgerMenu(false);
    }
  };

  return (
    // eslint-disable-next-line
    <nav className={cn(classes.navigation, { [classes.shownNavigation]: showBurgerMenu })} onClick={onLinkClick}>
      <NavLink to={RoutePath.About} className={setClass}>
        About
      </NavLink>
      <NavLink to={RoutePath.Skills} className={setClass}>
        Skills
      </NavLink>
      <NavLink to={RoutePath.Projects} className={setClass}>
        Projects
      </NavLink>
      <NavLink to={RoutePath.Contacts} className={setClass}>
        Contacts
      </NavLink>
    </nav>
  );
};
