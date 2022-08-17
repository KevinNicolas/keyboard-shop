import styled from 'styled-components';

export const HomeStyles = styled.section`
  & {
    --header-height: 7rem;

    display: grid;
    grid-template-rows: var(--header-height) calc(100% - var(--header-height));
  }
`;

export default HomeStyles;
