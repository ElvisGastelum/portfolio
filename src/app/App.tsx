import type { FC } from 'react';
import Layout from '@/app/Layout';
import Routes from '@/app/Routes';

interface Props {}

const App: FC<Props> = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default App;
