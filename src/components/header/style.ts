import styled from 'styled-components';
import { opacify } from 'polished';

export const Header = styled.header`
  /* display: flex; */
  height: 90vh;
  width: 100%;
  background-image: url('https://source.unsplash.com/random/ no-repeat');

  /* align-items: center; */
  /* justify-content: center; */
  .shade {
    height: 100%;
    width: 100%;
    background: ${opacify(0.4, 'rgba(15, 15, 120, 0.1)')};
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 64px;
    height: 100%;
    width: 60%;
    margin: 0 auto;
    text-align: center;

    img {
      margin-bottom: 64px;
    }

    strong {
      color: white;
      font-size: 64px;
      margin: 0;
    }

    button {
      margin-top: 64px;
      background-color: white;
      padding: 16px 96px;

      font-weight: bold;
      color: black;
      border: none;
      font-size: 18px;

      cursor: pointer;
    }
  }
`;
