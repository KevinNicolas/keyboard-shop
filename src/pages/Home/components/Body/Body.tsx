import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { KeyboardCard, Button } from '@components';

import BodyStyles from './Body.styles';

interface BodyProps {
  setDisplayView: (value: boolean) => void;
}

export const Body = ({ setDisplayView }: BodyProps) => {
  const searchBar = useRef(null);
  const navigate = useNavigate();

  const handleSearchBarClick = () => (searchBar as any).current.focus();
  const handleSearchButtonClick = () => {
    setDisplayView(false);
    setTimeout(() => {
      navigate('/auth/login');
    }, 1500);
  };

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
          transition={{ type: 'spring', duration: 1.7, delay: 2.2 }}
        >
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est porro voluptatem a minus! Unde doloribus reprehenderit nobis alias illum
            illo libero voluptates sunt, nostrum quo. Cum reprehenderit exercitationem nisi laudantium?
          </span>
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          className='search-bar'
          initial={{ opacity: 0 }}
          onClick={handleSearchBarClick}
          transition={{ type: 'tween', duration: 1, delay: 2.5 }}
        >
          <div className='search-bar-container'>
            <FiSearch />
            <input
              ref={searchBar}
              type='text'
            />
            <Button
              animate={false}
              onClick={handleSearchButtonClick}
            >
              <span>Buscar</span>
            </Button>
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        className='keyboard-container'
        initial={{ opacity: 0, x: '-100%' }}
        transition={{ type: 'tween', duration: 1.5, delay: 2.5 }}
      >
        {[1, 2, 3].map((key, index) => (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.3 }}
            key={key}
            transition={{ type: 'spring', duration: 1, delay: 4.2 + index / 2, bounce: 0.35 }}
          >
            <KeyboardCard />
          </motion.div>
        ))}

        {/* <KeyboardCard />
        <KeyboardCard /> */}
      </motion.div>
    </BodyStyles>
  );
};

export default Body;
