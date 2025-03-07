import { type FC, type ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './LanguageButton.module.scss';
import { Button } from '../Button/Button';
import { ContentTxtKey, Language } from '../../../../utils/types/enums';

export const LanguageButton: FC = (): ReactElement => {
  const { i18n, t } = useTranslation();
  const [languageMode, setLanguageMode] = useState<string>(localStorage.getItem(Language.Key) || Language.En);

  const onLanguageMode = (): void => {
    const newLanguageMode = languageMode === Language.En ? Language.Ru : Language.En;

    setLanguageMode(newLanguageMode);
    i18n.changeLanguage(newLanguageMode);

    localStorage.setItem(Language.Key, newLanguageMode);
  };

  return <Button text={t(ContentTxtKey.LanguageButton)} className={classes.languageButton} onClick={onLanguageMode} />;
};
