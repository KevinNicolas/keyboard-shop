import { useState } from 'react';
import { motion } from 'framer-motion';

import HomeStyles from './Home.styles';

import { Header } from './components';
import { Body } from './components';

export const Home = () => {
  const [displayView, setDisplayView] = useState<boolean>(true);

  return (
    <motion.section
      animate={{ opacity: displayView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <HomeStyles>
        <Header setDisplayView={setDisplayView} />
        <Body setDisplayView={setDisplayView} />
      </HomeStyles>
    </motion.section>
  );
};
