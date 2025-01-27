import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './ProjectCard.module.scss';
import { Link } from '../../../Common/Link/Link';
import { Icon } from '../../../../utils/enums';

type PropsType = {
  name: string;
  subname: string;
  className: string;
  screenshot?: string;
  description: string;
  technologies: string;
  codeLink?: string;
  previewLink?: string;
};

export const ProjectCard: FC<PropsType> = ({
  name,
  subname,
  className,
  screenshot,
  description,
  technologies,
  codeLink,
  previewLink,
}): ReactElement => {
  return (
    <div className={cn(classes.projectCard, className)}>
      <p className={classes.name}>{name}</p>
      <p className={classes.subname}>{subname}</p>
      <img className={classes.screenshot} src={screenshot} alt="Logo" />
      <p className={classes.description}>
        <span className={classes.highlightText}>The {name}</span> {description}
      </p>
      <p className={classes.technologies}>
        <span className={classes.highlightText}>Technologies:</span> {technologies}
      </p>
      <div className={classes.links}>
        <Link link={codeLink} icon={Icon.RoundGithub} text="View Code" iconBeforeName />
        <Link link={previewLink} icon={Icon.RoundLink} text="Live Preview" iconBeforeName />
      </div>
    </div>
  );
};
