import styled from 'styled-components';

interface BasicInputStylesProps {
  showPasswordButton: boolean;
}

export const BasicInputStyles = styled.div<BasicInputStylesProps>`
  display: grid;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  min-height: 3rem;
  grid-template-rows: 1.2rem calc(100% - 1.2rem);
  grid-template-columns: calc(100% - 48px) 48px;
  border-bottom: 2px solid var(--primary);
  transition: all 300ms;
  align-items: center;

  /* LABEL */
  .label {
    font-size: 0.8rem;
    transition: 300ms;
    grid-column: -1 / 1;
  }

  &:focus-within {
    border-color: var(--font-color);
    .label {
      font-size: 0.9rem;
    }
  }

  /* INPUT */
  &,
  input {
    background: transparent;
  }

  input {
    font-size: 1rem;
    padding-left: 10px;
    padding-bottom: 0.7rem;
    padding-right: ${({ showPasswordButton }) => (showPasswordButton ? '0' : '0.7rem')};
    width: 100%;
    transition: all 300ms;
    grid-column: ${({ showPasswordButton }) => (showPasswordButton ? '1' : '-1 / 1')};

    &:focus {
    }

    &,
    &::placeholder {
      color: var(--font-color);
    }
    &::placeholder {
      opacity: 0.4;
    }
  }

  /* BUTTON */
  .icon-button {
    background: transparent;
    min-height: 100%;
    position: relative;
    bottom: 0.5rem;
    color: var(--font-color);
    cursor: pointer;
  }
`;

export default BasicInputStyles;
