import type { Dispatch, FC, KeyboardEvent, MouseEvent, ReactElement, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './Navigation.module.scss';
import { ContentTxtKey, EventType, KeyboardEventCode, RoutePath } from '../../../utils/types/enums';

type PropsType = {
  showBurgerMenu: boolean;
  setShowBurgerMenu: Dispatch<SetStateAction<boolean>>;
};

export const Navigation: FC<PropsType> = ({ showBurgerMenu, setShowBurgerMenu }): ReactElement => {
  const { t } = useTranslation();

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
          {t(ContentTxtKey.AboutLink)}
        </NavLink>
        <NavLink to={RoutePath.Skills} className={setClass}>
          {t(ContentTxtKey.SkillsLink)}
        </NavLink>
        <NavLink to={RoutePath.Projects} className={setClass}>
          {t(ContentTxtKey.ProjectsLink)}
        </NavLink>
        <NavLink to={RoutePath.Contacts} className={setClass}>
          {t(ContentTxtKey.ContactsLink)}
        </NavLink>
      </div>
    </nav>
  );
};
