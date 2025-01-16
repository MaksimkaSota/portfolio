import { type FC, type ReactElement, useState } from 'react';
import classes from './LanguageButton.module.scss';
import { Button } from '../Button/Button';
import { Language } from '../../../utils/enums';

export const LanguageButton: FC = (): ReactElement => {
  const [languageMode, setLanguageMode] = useState<string>(Language.Ru);

  const text = languageMode === Language.Ru ? 'ENG' : 'RU';

  const onLanguageMode = (): void => {
    const newLanguageMode = languageMode === Language.Ru ? Language.En : Language.Ru;
    setLanguageMode(newLanguageMode);
  };

  return <Button text={text} className={classes.languageButton} onClick={onLanguageMode} />;
};
