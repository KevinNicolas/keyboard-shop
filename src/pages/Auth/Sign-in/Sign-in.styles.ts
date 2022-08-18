import styled from 'styled-components';

export const SignInStyles = styled.section`
  .logo-image {
    position: absolute;
    margin: max(1rem);
    max-width: 5rem;
    max-height: 5rem;
    z-index: 1;
  }

  .page-content {
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .options {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        gap: 1rem;
        justify-content: center;
        align-items: center;

        .remember-me {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .sign-up {
          display: flex;
          justify-content: center;
          align-items: center;
          grid-column: -1 / 1;
        }
      }
    }
  }

  .image-container {
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    img {
      max-width: 800px;
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 799px) {
    .page-content {
      width: 100%;
    }

    .image-container {
      display: none;
    }
  }
`;

export default SignInStyles;
