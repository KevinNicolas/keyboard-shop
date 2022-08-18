import { useState } from 'react';
import { motion } from 'framer-motion';

import HomeStyles from './Home.styles';

import { Header } from './components';
import { Body } from './components';

export const Home = () => {
  const [displayView, setDisplayView] = useState<boolean>(true);

  return (
    <motion.section
      exit={{ opacity: 0 }}
      initial={{ opacity: 1 }}
      transition={{ type: 'tween', duration: 1 }}
    >
      <HomeStyles>
        <Header setDisplayView={setDisplayView} />
        <Body setDisplayView={setDisplayView} />
      </HomeStyles>
    </motion.section>
  );
};
