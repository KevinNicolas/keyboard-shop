import { motion } from 'framer-motion';
import { FiAlignJustify } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components';
import Logo from '@assets/svgs/logo.svg';

import HeaderStyles from './Header.styles';
import HeaderXLStyles from './Header-xl.styles';
import HeaderSMStyles from './Header-sm.styles';

interface HeaderProps {
  setDisplayView: (value: boolean) => void;
}

export const Header = ({ setDisplayView }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setDisplayView(false);
    setTimeout(() => {
      navigate('/auth');
    }, 1500);
  };

  return (
    <HeaderStyles>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -150, opacity: 0 }}
        transition={{ type: 'spring', duration: 2, delay: 1, bounce: 0.3 }}
      >
        <HeaderXLStyles>
          <img
            src={Logo}
            alt='Logo image'
          />
          <span className='item'>Marcas</span>
          <span className='item'>Categorias</span>
          <Button
            onClick={handleLoginClick}
            className='login-btn'
            customStyles={{ fontSize: 1, bold: true }}
          >
            Ingresar
          </Button>
        </HeaderXLStyles>
        <HeaderSMStyles>
          <img
            src={Logo}
            alt='Logo image'
          />
          <FiAlignJustify className='collapse-button' />
        </HeaderSMStyles>
      </motion.div>
    </HeaderStyles>
  );
};

export default Header;
