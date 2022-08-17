import KeyboardCardStyles from './Keyboard-card.styles';
import { motion } from 'framer-motion';

export const KeyboardCard = () => {
  return (
    <motion.div
      transition={{ type: 'spring', duration: 0.5, bounce: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
    >
      <KeyboardCardStyles>
        <img
          src='https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard/pro-clicky-hero.png'
          alt='keyboard image preview'
        />
        <div className='card-info'>
          <span>Keyboard keycron</span>
          <span>Logitech</span>
          <span className='price'>$ 19.412,54</span>
        </div>
      </KeyboardCardStyles>
    </motion.div>
  );
};
