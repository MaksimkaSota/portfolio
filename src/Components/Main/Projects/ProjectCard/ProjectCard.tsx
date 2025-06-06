import type { ElementType, FC, ReactElement } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './ProjectCard.module.scss';
import { Image } from '../../../Common/Image/Image';
import { Link } from '../../../Common/Link/Link';
import { AltTxtKey, ContentTxtKey, Icon } from '../../../../utils/types/enums';

type PropsType = {
  name: string;
  subname: string;
  className: string;
  ScreenshotMin: ElementType;
  screenshotMax: string;
  description: string;
  technologies: string;
  codeLink?: string;
  previewLink?: string;
};

export const ProjectCard: FC<PropsType> = ({
  name,
  subname,
  className,
  ScreenshotMin,
  screenshotMax,
  description,
  technologies,
  codeLink,
  previewLink,
}): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={cn(classes.projectCard, className)}>
      <p className={classes.name}>{name}</p>
      <p className={classes.subname}>{subname}</p>
      <Image
        ImageSVG={ScreenshotMin}
        image={screenshotMax}
        altTxt={t(AltTxtKey.Logo)}
        classNameContainer={classes.screenshotContainer}
      />
      <p className={classes.description}>
        <span className={classes.highlightText}>{name}</span> {description}
      </p>
      <p className={classes.technologies}>
        <Trans i18nKey={ContentTxtKey.TechnologyText} values={{ technologies }}>
          <span className={classes.highlightText} />
        </Trans>
      </p>
      <div className={classes.links}>
        <Link link={codeLink} icon={Icon.RoundGithub} text={t(ContentTxtKey.CodeLink)} iconBeforeName />
        <Link link={previewLink} icon={Icon.RoundLink} text={t(ContentTxtKey.PreviewLink)} iconBeforeName />
      </div>
    </div>
  );
};
