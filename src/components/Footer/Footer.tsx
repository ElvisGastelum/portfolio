import type { FC } from 'react';
import {
  Container,
  Segment,
  Grid,
  Header,
  List,
  SegmentProps,
  Icon,
} from 'semantic-ui-react';
import { SocialMediaSources } from '@/constants';

interface Props extends SegmentProps {}

const Footer: FC<Props> = (props) => {
  return (
    <Segment
      as="footer"
      inverted
      vertical
      style={{
        padding: '3em 0em',
        marginTop: 'auto',
      }}
      {...props}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as="h4" inverted>
                Social Media
              </Header>
              <List link inverted>
                <List.Item as="a" href={SocialMediaSources.Twitter}>
                  <Icon name="twitter" style={{ paddingLeft: 1 }} />
                  Twitter
                </List.Item>
                <List.Item as="a" href={SocialMediaSources.Github}>
                  <Icon name="github" style={{ paddingLeft: 1 }} />
                  Github
                </List.Item>
                <List.Item as="a" href={SocialMediaSources.Linkedin}>
                  <Icon name="linkedin" style={{ paddingLeft: 1 }} />
                  Linkedin
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as="h4" inverted>
                &copy; 2021 - Elvis Gastelum
              </Header>
              <p>Web developer</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
