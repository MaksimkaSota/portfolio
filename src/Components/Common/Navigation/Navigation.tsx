import type { Dispatch, FC, KeyboardEvent, MouseEvent, ReactElement, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import classes from './Navigation.module.scss';
import { EventType, KeyboardEventCode, RoutePath } from '../../../utils/types/enums';

type PropsType = {
  showBurgerMenu: boolean;
  setShowBurgerMenu: Dispatch<SetStateAction<boolean>>;
};

export const Navigation: FC<PropsType> = ({ showBurgerMenu, setShowBurgerMenu }): ReactElement => {
  const setClass = ({ isActive }: { isActive: boolean }): string =>
    cn(classes.link, { [classes.activeLink]: isActive });

  const handleInteraction = (event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>): void => {
    if (
      (event.type === EventType.Click && (event.target as HTMLAnchorElement).className === classes.link) ||
      (event.type === EventType.Keydown && (event as KeyboardEvent).code === KeyboardEventCode.Enter)
    ) {
      setShowBurgerMenu((prevActualState: boolean): boolean => !prevActualState);
    }
  };

  return (
    <nav className={cn(classes.navigation, { [classes.shownNavigation]: showBurgerMenu })}>
      <div
        className={classes.navigationContainer}
        role="button"
        tabIndex={0}
        onClick={handleInteraction}
        onKeyDown={handleInteraction}
      >
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
      </div>
    </nav>
  );
};
