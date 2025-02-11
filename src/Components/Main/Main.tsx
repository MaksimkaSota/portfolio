import type { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './NotFound/NotFound';
import { About } from './About/About';
import { Skills } from './Skills/Skills';
import { Projects } from './Projects/Projects';
import { Contacts } from './Contacts/Contacts';
import { RoutePath } from '../../utils/types/enums';

export const Main: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={RoutePath.NotFound} element={<NotFound />} />
      <Route path={RoutePath.Main} element={<About />} />
      <Route path={RoutePath.About} element={<About />} />
      <Route path={RoutePath.Skills} element={<Skills />} />
      <Route path={RoutePath.Projects} element={<Projects />} />
      <Route path={RoutePath.Contacts} element={<Contacts />} />
    </Routes>
  );
};
