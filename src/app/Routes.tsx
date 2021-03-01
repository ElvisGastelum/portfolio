import type { FC } from 'react';
import { Router } from '@reach/router';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import { Pages } from '@/constants';

interface Props {}

const Routes: FC<Props> = () => {
  return (
    <Router>
      <Home default path={Pages.Home} />
      <Contact path={Pages.Contact} />
      <About path={Pages.About} />
    </Router>
  );
};

export default Routes;
