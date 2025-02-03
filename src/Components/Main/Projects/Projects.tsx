import type { FC, ReactElement } from 'react';
import classes from './Projects.module.scss';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { requestString } from '../../../utils/endpoints';
import SN from '../../../assets/images/projects/SocialNetwork.png';
import EC from '../../../assets/images/projects/EasyCharts.png';
import FP from '../../../assets/images/projects/FutureProject.png';

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
            description="is an online platform that allows people to create accounts and interact with others. It
            provides essential social networking features such as profile management, searching for friends and
            following them, and communicating via chat."
            technologies="React, Redux, TypeScript, SCSS, Axios, REST API, WebSocket, Formik, ESLint, Jest."
            codeLink={requestString.socialNetworkCode}
            previewLink={requestString.socialNetworkPreview}
          />
          <ProjectCard
            name="Easy Charts"
            subname="The study project"
            className={classes.EC}
            screenshot={EC}
            description="is a website for creating charts online. Select the chart type, fill in the data tables, and
            the chart is done! You can view and save the chart to paste into Excel, Word, and other programs on your
            computer. You can also get a link to the chart page to share it."
            technologies="React, Redux, TypeScript, SCSS, Axios, REST API, Formik, i18next, ESLint."
            codeLink={requestString.easyChartsCode}
            previewLink={requestString.easyChartsPreview}
          />
          <ProjectCard
            name="Future Project"
            subname="The pet project"
            className={classes.FP}
            screenshot={FP}
            description="The Future Project is a unique opportunity that will allow me to showcase my creativity and
            ability to work with modern technologies. It will also serve as a great way to learn new development tools
            and methods, as well as gain experience working on a real project."
            technologies="React, Redux, TypeScript."
          />
        </div>
      </div>
    </div>
  );
};
