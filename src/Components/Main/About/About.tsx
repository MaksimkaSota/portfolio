import { type FC, type ReactElement, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './About.module.scss';
import PortraitMin from '../../../assets/images/portrait.svg';
import portraitMax from '../../../assets/images/portrait.jpg';
import resume from '../../../assets/documents/resume.pdf';
import { AltTxtKey, ContentTxtKey } from '../../../utils/types/enums';

const Image: FC = (): ReactElement => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={classes.portraitContainer}>
      <PortraitMin className={cn(classes.portrait, classes.portraitMin, { [classes.hiddenPortraitMin]: isLoaded })} />
      <img
        className={cn(classes.portrait, classes.portraitMax, { [classes.shownPortraitMax]: isLoaded })}
        src={portraitMax}
        alt={AltTxtKey.Photo}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export const About: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <main className={classes.aboutMe}>
      <div className={classes.wrapper}>
        <Image />
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
            <a className={classes.downloadButton} href={resume} download="Maksim Sotnikov">
              {t(ContentTxtKey.DownloadButton)}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
