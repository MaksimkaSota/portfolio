import type { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import classes from './Navigation.module.scss';
import { RoutePath } from '../../../utils/types/enums';

export const Navigation: FC = (): ReactElement => {
  const setClass = ({ isActive }: { isActive: boolean }): string =>
    cn(classes.link, { [classes.activeLink]: isActive });

  return (
    <nav className={classes.navigation}>
      <NavLink to={RoutePath.About} className={setClass}>
        About me
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
