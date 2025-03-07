import type { FC, ReactElement } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import classes from './About.module.scss';
import portrait from '../../../assets/images/portrait.jpg';
import CV from '../../../assets/documents/CV.pdf';
import { AltTxtKey, ContentTxtKey } from '../../../utils/types/enums';

export const About: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <main className={classes.aboutMe}>
      <div className={classes.wrapper}>
        <img className={classes.portrait} src={portrait} alt={AltTxtKey.Photo} />
        <div className={classes.content}>
          <h3 className={classes.title}>{t(ContentTxtKey.AboutTitle)}</h3>
          <h1 className={classes.mainTitle}>{t(ContentTxtKey.MainTitle)}</h1>
          <p className={classes.text}>
            <Trans i18nKey={ContentTxtKey.AboutDescription1}>
              I am a <span className={classes.highlightText}>Frontend developer</span> focused on creating interactive
              and user-friendly web applications. My toolkit includes React, Redux, JavaScript, TypeScript, as well as
              many other tools to build scalable and maintainable user interfaces.
            </Trans>
          </p>
          <p className={classes.text}>{t(ContentTxtKey.AboutDescription2)}</p>
          <div className={classes.container}>
            <div className={classes.educationContainer}>
              <p className={classes.education}>{t(ContentTxtKey.BNTUText)}</p>
              <p className={classes.speciality}>{t(ContentTxtKey.SpecialityText1)}</p>
              <p className={classes.education}>{t(ContentTxtKey.STEPText)}</p>
              <p className={classes.speciality}>{t(ContentTxtKey.SpecialityText2)}</p>
              <p className={classes.education}>{t(ContentTxtKey.RSSText)}</p>
              <p className={classes.speciality}>{t(ContentTxtKey.SpecialityText3)}</p>
            </div>
            <a className={classes.downloadButton} href={CV} download="Maksim Sotnikov">
              {t(ContentTxtKey.DownloadButton)}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
