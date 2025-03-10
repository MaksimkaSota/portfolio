import type { FC, ReactElement } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import classes from './Footer.module.scss';
import { Link } from '../Common/Link/Link';
import { ContentTxtKey, Icon } from '../../utils/types/enums';
import { requestString } from '../../services/api/endpoints';

export const Footer: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.links}>
          <Link link={requestString.gitHub} icon={Icon.SquareGithub} text={t(ContentTxtKey.GitHubLink)} iconAfterName />
          <Link
            link={requestString.linkedIn}
            icon={Icon.SquareLinkedin}
            text={t(ContentTxtKey.LinkedInLink)}
            iconAfterName
          />
        </div>
        <p className={classes.copyright}>
          <Trans i18nKey={ContentTxtKey.FooterDescription}>
            <span className={classes.highlightText} />
          </Trans>
        </p>
      </div>
    </footer>
  );
};
