import styled from 'styled-components';

export const HeaderStyles = styled.div`
  & {
    display: flex;
    flex-direction: row;
    align-items: end;
    padding: 0 max(2rem, 12rem);
    gap: max(2rem, 4rem);
  }

  .logo {
    width: 4rem;
  }

  span {
    font-size: 1.5rem;
  }

  .button {
    padding: 0.8rem 1.2rem;
    border-radius: 5px;
    font-size: 1.2rem;
  }

  .login-btn {
    background: var(--primary);
    color: var(--font-color);
    font-weight: 600;
    margin-left: auto;
  }
`;

export default HeaderStyles;
