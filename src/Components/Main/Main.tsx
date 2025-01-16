import type { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './About/About';
import { RoutePath } from '../../utils/enums';

export const Main: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={RoutePath.NotFound} element={<h3>NotFound</h3>} />
      <Route path={RoutePath.Main} element={<About />} />
      <Route path={RoutePath.About} element={<About />} />
    </Routes>
  );
};
