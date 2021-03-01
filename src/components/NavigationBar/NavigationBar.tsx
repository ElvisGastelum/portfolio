import type { FC } from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import { Link } from '@reach/router';

import { Pages } from '@/constants';
import logo from './assets/logo.png';
import NavigationText from './styles/NavigationText';

interface Props {}

const NavigationBar: FC<Props> = () => {
  return (
    <Menu as="nav" inverted borderless style={{ borderRadius: 0, margin: 0 }}>
      <Container>
        <Menu.Item active name="Elvis Gastelum" to={Pages.Home} as={Link}>
          <Image circular src={logo} avatar />
          <NavigationText>Portfolio</NavigationText>
        </Menu.Item>
        <Menu.Item position="right" name="about" to={Pages.About} as={Link} />
        <Menu.Item name="contact" to={Pages.Contact} as={Link} />
      </Container>
    </Menu>
  );
};

export default NavigationBar;
