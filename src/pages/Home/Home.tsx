import type { FC } from 'react';
import type { RouteComponentProps } from '@reach/router';
import Header from './components/Header';
import Projects from './components/Projects';

interface Props extends RouteComponentProps {}

const Home: FC<Props> = () => {
  return (
    <>
      <Header />
      <Projects />
    </>
  );
};

export default Home;
