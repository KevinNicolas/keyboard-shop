import styled from 'styled-components';

interface StyleProps {
  backgroundColor?: string;
  bold?: boolean;
  fontSize?: number;
  textColor?: string;
  transitionTime?: number;
  width?: string;
}

export const ButtonStyles = styled.button<StyleProps>`
  & {
    background: ${({ backgroundColor = 'var(--primary)' }) => backgroundColor};
    border-radius: 5px;
    font-size: ${({ fontSize = 1 }) => `${fontSize}rem`};
    color: ${({ textColor = 'var(--font-color)' }) => textColor};
    padding: 0.8em 1.8em;
    transition: all ${({ transitionTime = 0.3 }) => `${transitionTime}s`} ease-in-out;
    font-weight: ${({ bold }) => (bold ? 600 : 500)};
    width: ${({ width }) => width};
  }

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(0.9);
  }
`;

export default ButtonStyles;
