import HomeStyles from './Home.styles';

import { Header } from './components';
import { Body } from './components';

export const Home = () => {
  return (
    <HomeStyles>
      <Header />
      <Body />
    </HomeStyles>
  );
};
