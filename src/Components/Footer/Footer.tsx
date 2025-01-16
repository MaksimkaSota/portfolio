import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './Footer.module.scss';
import { Icon } from '../../utils/enums';
import { requestString } from '../../utils/endpoints';

export const Footer: FC = (): ReactElement => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.links}>
          <a className={classes.link} href={requestString.github} target="_blank" rel="noopener noreferrer">
            <span className={classes.name}>GitHub</span>
            <span className={cn(classes.icon, Icon.SquareGithub)} />
          </a>
          <a className={classes.link} href={requestString.linkedin} target="_blank" rel="noopener noreferrer">
            <span className={classes.name}>LinkedIn</span>
            <span className={cn(classes.icon, Icon.SquareLinkedin)} />
          </a>
        </div>
        <p className={classes.copyright}>
          © Developed by <span className={classes.highlightText}>Maksim Sotnikov</span>
        </p>
      </div>
    </footer>
  );
};
