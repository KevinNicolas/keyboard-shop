import styled from 'styled-components';

export const HeaderSMStyles = styled.div`
  & {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  img {
    max-width: 75px;
    max-height: 75px;
  }

  @media screen and (min-width: 600px) {
    & {
      display: none;
    }
  }
`;

export default HeaderSMStyles;
