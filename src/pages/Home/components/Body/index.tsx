import BodyStyles from './Body.styles';
import { KeyboardCard } from '@components';

import { motion } from 'framer-motion';

export const Body = () => {
  return (
    <BodyStyles>
      <div className='info-container'>
        <div className='title-container'>
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: 100 }}
            transition={{ type: 'spring', duration: 1, delay: 1.5, bounce: 0 }}
          >
            <h1>Most popular keyboards</h1>
          </motion.div>
        </div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: 'spring', duration: 1.7, delay: 2 }}
        >
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est porro voluptatem a minus! Unde doloribus reprehenderit nobis alias illum
            illo libero voluptates sunt, nostrum quo. Cum reprehenderit exercitationem nisi laudantium?
          </span>
        </motion.div>
      </div>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        className='keyboard-container'
        initial={{ opacity: 0, x: '-100%' }}
        transition={{ type: 'tween', duration: 1.5, delay: 2 }}
      >
        {[1, 2, 3].map((key, index) => (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ type: 'spring', duration: 1, delay: 3.5 + index / 2, bounce: 0.3 }}
          >
            <KeyboardCard key={key} />
          </motion.div>
        ))}

        {/* <KeyboardCard />
        <KeyboardCard /> */}
      </motion.div>
    </BodyStyles>
  );
};

export default Body;
