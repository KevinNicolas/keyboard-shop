import Logo from '@assets/svgs/logo.svg';
import HeaderStyles from './Header.styles';

export const Header = () => {
  return (
    <HeaderStyles>
      <img
        className='logo'
        src={Logo}
        alt='Logo image'
      />

      <span>Marcas</span>
      <span>Categorias</span>
      <button className='button login-btn'>Ingresar</button>
    </HeaderStyles>
  );
};
