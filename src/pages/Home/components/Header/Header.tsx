import type { FC } from 'react';
import {
  Container,
  Header as HeaderText,
  Button,
  Icon,
  Segment,
} from 'semantic-ui-react';
import { SocialMediaSources } from '@/constants';

interface Props {}

const Header: FC<Props> = () => {
  return (
    <Segment padded="very" size="massive">
      <Container text textAlign="center">
        <HeaderText
          as="h1"
          content="Elvis Gastelum"
          style={{
            fontSize: '2em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '1.5em',
          }}
        />
        <HeaderText
          as="h2"
          content="Web Developer"
          style={{
            fontSize: '1.5em',
            fontWeight: 'normal',
            marginTop: '0.5em',
          }}
        />
        <Button primary size="large" as="a" href={SocialMediaSources.Linkedin}>
          <Icon name="linkedin" />
          Linkedin
        </Button>
        <Button secondary size="large" as="a" href={SocialMediaSources.Github}>
          <Icon name="github" />
          Github
        </Button>
      </Container>
    </Segment>
  );
};

export default Header;
