import BasicInputStyles from './Basic-input.styles';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface BasicInputProps {
  label: string;
  placeholder: string;
  passwordButton?: {
    displayButton: boolean;
    show: boolean;
    handleOnClick: (...args: any[]) => void;
  };
  type?: string;
}

export const BasicInput = ({ label, placeholder, passwordButton, type }: BasicInputProps) => {
  return (
    <BasicInputStyles showPasswordButton={passwordButton && passwordButton.displayButton ? true : false}>
      <span className='label'>{label}</span>
      <input
        type={type ?? 'text'}
        placeholder={placeholder}
      />
      {passwordButton && passwordButton.displayButton ? (
        <button
          onClick={passwordButton.handleOnClick}
          className='icon-button'
          type='button'
        >
          {passwordButton.show ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
        </button>
      ) : (
        <></>
      )}
    </BasicInputStyles>
  );
};

export default BasicInput;
