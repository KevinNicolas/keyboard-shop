import styled from 'styled-components';

export const HeaderXLStyles = styled.div`
  & {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0 2rem;
    gap: 2rem;
  }

  img {
    max-width: 75px;
    max-height: 75px;
  }

  .item {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .login-btn {
    margin-left: auto;
  }

  @media screen and (max-width: 599px) {
    & {
      display: none;
    }
  }
`;

export default HeaderXLStyles;
