import type { FC, CSSProperties } from 'react';
import { Container } from 'semantic-ui-react';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  const contentCss: CSSProperties = {
    marginTop: '1rem',
    marginBottom: '1rem',
  };

  const containerCss: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  return (
    <div style={containerCss}>
      <NavigationBar />
      <Container as="main" style={contentCss}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
