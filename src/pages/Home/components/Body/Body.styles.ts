import styled from 'styled-components';

export const BodyStyles = styled.div`
  & {
    display: grid;
    grid-template-rows: 40% 60%;
    grid-template-columns: 100%;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
  }

  .info-container {
    text-align: center;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;

    .title-container {
      height: 2rem;
      overflow: hidden;
      div {
      }
    }

    .description {
      display: inline-block;
      max-width: 100ch;
    }

    span {
      opacity: 0.5;
    }
  }

  .keyboard-container {
    background: var(--primary);
    display: flex;
    flex-direction: row;
    overflow: auto;
    justify-content: space-around;
    align-items: center;
    padding: 3rem 0rem;
    width: 100%;
    gap: 2rem;
  }

  @media screen and (max-width: 1050px) {
    .keyboard-container {
      padding: 3rem 2rem;
      justify-content: start;
    }
  }
`;

export default BodyStyles;
