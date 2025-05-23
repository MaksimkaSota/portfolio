import { type FC, type ReactElement } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './About.module.scss';
import { Image } from '../../Common/Image/Image';
import PortraitMin from '../../../assets/images/portrait.svg';
import portraitMax from '../../../assets/images/portrait.jpg';
import resume from '../../../assets/documents/resume.pdf';
import { AltTxtKey, ContentTxtKey } from '../../../utils/types/enums';

export const About: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <main className={classes.aboutMe}>
      <div className={classes.wrapper}>
        <Image
          ImageSVG={PortraitMin}
          image={portraitMax}
          altTxt={t(AltTxtKey.Photo)}
          classNameContainer={classes.portraitContainer}
        />
        <div className={classes.content}>
          <h3 className={classes.title}>{t(ContentTxtKey.AboutTitle)}</h3>
          <h1 className={classes.mainTitle}>{t(ContentTxtKey.MainTitle)}</h1>
          <p className={classes.text}>
            <Trans i18nKey={ContentTxtKey.AboutDescription1}>
              <span className={classes.highlightText} />
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
            <div className={classes.resumeContainer}>
              <a
                className={cn(classes.resumeButton, classes.openButton)}
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(ContentTxtKey.OpenButton)}
              </a>
              <a className={classes.resumeButton} href={resume} download="Maksim Sotnikov">
                {t(ContentTxtKey.DownloadButton)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
