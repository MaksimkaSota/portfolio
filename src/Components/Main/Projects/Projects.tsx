import type { FC, ReactElement } from 'react';
import classes from './Projects.module.scss';
import { ProjectCard } from '../../Common/ProjectCard/ProjectCard';
import { requestString } from '../../../utils/endpoints';
import SN from '../../../assets/images/SocialNetwork.png';
import EC from '../../../assets/images/EasyCharts.png';
import FP from '../../../assets/images/FutureProject.png';

export const Projects: FC = (): ReactElement => {
  return (
    <div className={classes.projects}>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>My projects</h3>
        <div className={classes.projectCards}>
          <ProjectCard
            name="Social Network"
            subname="The study project"
            className={classes.SN}
            screenshot={SN}
            description="is a online platform that allows people to create an account and interact with other people.
            It provides essential social networking features such as profile management, searching for friends and
            subscribing to them, communicating in a chat."
            technologies="React, Redux, TypeScript, SCSS, Axios, REST API, WebSocket, Formik, ESLint, Jest."
            codeLink={requestString.socialNetworkCode}
            previewLink={requestString.socialNetworkPreview}
          />
          <ProjectCard
            name="Easy Charts"
            subname="The study project"
            className={classes.EC}
            screenshot={EC}
            description="is a website for creating charts online. Select the chart type, fill data tables, and the
            chart is done! You can view and save the chart to paste it into Excel, Word, and other programs on
            your computer. You can get a link to the chart page to share it."
            technologies="React, Redux, TypeScript, SCSS, Axios, REST API, Formik, i18next, ESLint."
            codeLink={requestString.easyChartsCode}
            previewLink={requestString.easyChartsPreview}
          />
          <ProjectCard
            name="Future Project"
            subname="The pet project"
            className={classes.FP}
            screenshot={FP}
            description="is something unique which will allow me to show my creativity and ability to
            work with modern technologies. It will also be a great way to learn new development tools and methods, as
            well as gain experience working on a real project."
            technologies="React, Redux, TypeScript."
          />
        </div>
      </div>
    </div>
  );
};
