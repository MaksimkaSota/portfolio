import type { FC, ReactElement } from 'react';
import classes from './DownloadButton.module.scss';
import { Button } from '../Button/Button';

export const DownloadButton: FC = (): ReactElement => {
  return <Button text="Download CV" className={classes.downloadButton} />;
};
