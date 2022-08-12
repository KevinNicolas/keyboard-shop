import styled from 'styled-components';

export const HomeStyles = styled.section`
  --header-size: 7rem;

  & {
    display: grid;
    grid-template-rows: var(--header-size) calc(100vh - var(--header-size));
  }
`;

export default HomeStyles;
