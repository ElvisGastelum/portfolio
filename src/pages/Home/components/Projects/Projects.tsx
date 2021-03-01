import type { FC } from 'react';
import {
  Container,
  Header,
  Segment,
  Message,
  MessageContent,
  MessageHeader,
} from 'semantic-ui-react';

interface Props {}

const Projects: FC<Props> = () => {
  return (
    <Segment disabled inverted>
      <Container style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
        <Header inverted size="large" textAlign="center">
          Projects
        </Header>
        <Message size="massive" warning style={{ textAlign: 'center' }}>
          <MessageHeader>Soon</MessageHeader>
          <MessageContent>Next projects will be displayed here...</MessageContent>
        </Message>
      </Container>
    </Segment>
  );
};

export default Projects;
