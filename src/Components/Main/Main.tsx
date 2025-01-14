import type { FC, ReactElement } from 'react';
import { AboutMe } from './AboutMe/AboutMe';

export const Main: FC = (): ReactElement => {
  return (
    <main>
      <AboutMe />
    </main>
  );
};
