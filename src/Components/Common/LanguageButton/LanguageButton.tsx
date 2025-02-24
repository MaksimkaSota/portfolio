import { type FC, type ReactElement, useState } from 'react';
import classes from './LanguageButton.module.scss';
import { Button } from '../Button/Button';
import { Language } from '../../../utils/types/enums';

export const LanguageButton: FC = (): ReactElement => {
  const [languageMode, setLanguageMode] = useState<string>(localStorage.getItem(Language.Key) || Language.En);

  const text = languageMode === Language.En ? 'ENG' : 'RU';

  const onLanguageMode = (): void => {
    const newLanguageMode = languageMode === Language.En ? Language.Ru : Language.En;
    setLanguageMode(newLanguageMode);
    localStorage.setItem(Language.Key, newLanguageMode);
  };

  return <Button text={text} className={classes.languageButton} onClick={onLanguageMode} />;
};
