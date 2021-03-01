import type { FC, CSSProperties } from 'react';
import type { RouteComponentProps } from '@reach/router';
import { Card, Icon, Image, Segment } from 'semantic-ui-react';

import avatarImage from './assets/avatar.jpg';

interface Props extends RouteComponentProps {}

const About: FC<Props> = () => {
  const descriptionCss: CSSProperties = {
    fontSize: '1em',
    lineHeight: 'normal',
  };
  return (
    <Segment padded basic>
      <Card fluid>
        <Image
          src={avatarImage}
          wrapped
          size="medium"
          centered
          circular
          bordered
        />
        <Card.Content>
          <Card.Header textAlign="center">About</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description textAlign="left" style={descriptionCss}>
            <p>Hello my name is Elvis Gastelum, I born on November 27 - 1999</p>
            <p>
              I can create for you web pages with the latest generation
              framework react, with which you can get complete web applications
              within a browser and not just static web pages.
            </p>
          </Card.Description>
        </Card.Content>
      </Card>
    </Segment>
  );
};

export default About;
