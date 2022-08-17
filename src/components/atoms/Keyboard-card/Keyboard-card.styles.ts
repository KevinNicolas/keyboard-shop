import styled from 'styled-components';

export const KeyboardCardStyles = styled.div`
  max-width: 320px;
  max-height: 420px;
  width: 300px;
  height: 220px;
  padding: 0 1rem;
  box-shadow: 0 0 20px black;
  display: grid;
  grid-template-rows: 60% 40%;
  align-items: center;
  border-radius: 5px;

  img {
    width: 250px;
    height: auto;
  }

  .card-info {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: repeat(2, 50%);
    align-items: center;
    justify-content: center;

    & *:nth-child(1) {
      grid-column: 1 / -1;
    }

    & .price {
      font-weight: 700;
    }
  }
`;

export default KeyboardCardStyles;
