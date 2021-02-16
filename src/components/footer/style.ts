import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #7f7f7f;
  height: 90vh;
  position: relative;

  .title-content {
    position: absolute;
  }

  #bars {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: flex-end;

    height: 100%;
    width: 100%;

    .bar {
      .top {
        background-color: blueviolet;
        padding: 16px;
      }

      .bottom {
        background-color: blue;
        padding: 16px;
      }

      & + .bar {
        margin-left: 36px;
      }
    }
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  padding: 128px;
`;
