import { useRef, useState } from 'react';

import { BasicInput, Button } from '@components';
import Logo from '@assets/svgs/logo.svg';
import SignInGif from '@assets/gifs/Sign-in-dark-800.gif';

import SignInStyles from './Sign-in.styles';

export const SignIn = () => {
  const rememberMeBtnRef = useRef(null);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <SignInStyles>
      <img
        className='logo-image'
        src={Logo}
        alt='Logo image'
      />
      <div className='page-content'>
        <form>
          <h1>Sign in</h1>
          <BasicInput
            label='Email'
            placeholder='example@email.com'
          />
          <BasicInput
            label='Password'
            placeholder='*********************'
            passwordButton={{
              displayButton: true,
              handleOnClick: () => setShowPassword(!showPassword),
              show: showPassword,
            }}
            type={showPassword ? 'text' : 'password'}
          />
          <Button customStyles={{ width: '100%' }}>
            <span>Sign in</span>
          </Button>
          <div className='options'>
            <div className='remember-me'>
              <input type='checkbox' />
              <span>Remember me</span>
            </div>
            <span>Forgot password?</span>
            <div className='sign-up'>
              <span>Sign up</span>
            </div>
          </div>
        </form>
      </div>
      <div className='image-container'>
        <img
          src={SignInGif}
          alt='Sign in gif'
        />
      </div>
    </SignInStyles>
  );
};
