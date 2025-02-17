import type { FC, ReactElement } from 'react';
import classes from './Footer.module.scss';
import { Link } from '../Common/Link/Link';
import { Icon } from '../../utils/types/enums';
import { requestString } from '../../services/api/endpoints';

export const Footer: FC = (): ReactElement => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.links}>
          <Link link={requestString.gitHub} icon={Icon.SquareGithub} text="GitHub" iconAfterName />
          <Link link={requestString.linkedIn} icon={Icon.SquareLinkedin} text="LinkedIn" iconAfterName />
        </div>
        <p className={classes.copyright}>
          © Developed by <span className={classes.highlightText}>Maksim Sotnikov</span>
        </p>
      </div>
    </footer>
  );
};
