import type { FC, ReactElement } from 'react';
import classes from './About.module.scss';
import portrait from '../../../assets/images/portrait.jpg';
import CV from '../../../assets/documents/CV.pdf';

export const About: FC = (): ReactElement => {
  return (
    <main className={classes.aboutMe}>
      <div className={classes.wrapper}>
        <img className={classes.portrait} src={portrait} alt="Portrait" />
        <div className={classes.content}>
          <h3 className={classes.title}>About me</h3>
          <h1 className={classes.mainTitle}>I am Maksim Sotnikov</h1>
          <p className={classes.text}>
            I am a <span className={classes.highlightText}>Frontend developer</span> focused on creating interactive and
            user-friendly web applications. My toolkit includes React, Redux, JavaScript, TypeScript, as well as many
            other tools to build scalable and maintainable user interfaces.
          </p>
          <p className={classes.text}>
            My goal is to create intuitive and engaging web applications. I am committed to staying up to date with the
            latest technologies and trends in web development to ensure that my work remains relevant and effective. I
            believe that web development is not just about coding, but also about understanding the needs of users and
            creating solutions that meet their requirements.
          </p>
          <div className={classes.container}>
            <div className={classes.educationContainer}>
              <p className={classes.education}>Belarusian National Technical University</p>
              <p className={classes.speciality}>Mechanical Engineering</p>
              <p className={classes.education}>Computer Academy STEP</p>
              <p className={classes.speciality}>Front-end Development</p>
              <p className={classes.education}>The Rolling Scopes School</p>
              <p className={classes.speciality}>JavaScript/Front-end</p>
            </div>
            <a className={classes.downloadButton} href={CV} download="Maksim Sotnikov">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
