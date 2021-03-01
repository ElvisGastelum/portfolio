import type { FC } from 'react';
import type { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {}

const Contact: FC<Props> = () => {
  return <h1>Contact page</h1>;
};

export default Contact;
