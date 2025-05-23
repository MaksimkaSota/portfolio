import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Projects.module.scss';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { requestString } from '../../../services/api/endpoints';
import SNMin from '../../../assets/images/projects/SocialNetwork.svg';
import SNMax from '../../../assets/images/projects/SocialNetwork.png';
import ECMin from '../../../assets/images/projects/EasyCharts.svg';
import ECMax from '../../../assets/images/projects/EasyCharts.png';
import FPMin from '../../../assets/images/projects/FutureProject.svg';
import FPMax from '../../../assets/images/projects/FutureProject.png';
import { ContentTxtKey } from '../../../utils/types/enums';

export const Projects: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={classes.projects}>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>{t(ContentTxtKey.ProjectsTitle)}</h3>
        <div className={classes.projectCards}>
          <ProjectCard
            name={t(ContentTxtKey.SocialNetworkProject)}
            subname={t(ContentTxtKey.StudySubnameText)}
            className={classes.SN}
            ScreenshotMin={SNMin}
            screenshotMax={SNMax}
            description={t(ContentTxtKey.SocialNetworkDescription)}
            technologies={t(ContentTxtKey.TechnologySNText)}
            codeLink={requestString.socialNetworkCode}
            previewLink={requestString.socialNetworkPreview}
          />
          <ProjectCard
            name={t(ContentTxtKey.EasyChartsProject)}
            subname={t(ContentTxtKey.StudySubnameText)}
            className={classes.EC}
            ScreenshotMin={ECMin}
            screenshotMax={ECMax}
            description={t(ContentTxtKey.EasyChartsDescription)}
            technologies={t(ContentTxtKey.TechnologyECText)}
            codeLink={requestString.easyChartsCode}
            previewLink={requestString.easyChartsPreview}
          />
          <ProjectCard
            name={t(ContentTxtKey.FutureProjectProject)}
            subname={t(ContentTxtKey.PetSubnameText)}
            className={classes.FP}
            ScreenshotMin={FPMin}
            screenshotMax={FPMax}
            description={t(ContentTxtKey.FutureProjectDescription)}
            technologies={t(ContentTxtKey.TechnologyFPText)}
          />
        </div>
      </div>
    </div>
  );
};
