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
    width: 100%;

    .title-container {
      height: 2rem;
      overflow: hidden;
    }

    .description {
      display: inline-block;
      max-width: 100ch;
    }

    span {
      opacity: 0.5;
    }

    .search-bar {
      width: 100%;

      &,
      .search-bar-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .search-bar-container {
        width: 100%;
        background: white;
        border-radius: 5px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        padding: 0.5rem;
        padding-right: 0;
        font-size: 1.5rem;
        cursor: text;

        &,
        input {
          max-width: 50rem;
          min-width: 12rem;
          width: 100%;
          height: 2rem;
        }

        input {
          color: #333;
        }

        span {
          opacity: 1;
        }
      }
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

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.2rem;
    }

    .info-container {
      gap: 1rem;

      span {
        font-size: 0.9rem;
      }
    }
  }
`;

export default BodyStyles;
