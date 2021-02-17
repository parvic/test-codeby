import styled from 'styled-components';

export const Main = styled.main`
  padding: 56px 112px;

  .title-content {
  }

  #rows {
    margin-top: 56px;
  }

  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 360px;

    & + .row {
      margin-top: 5%;
    }
  }

  .row.one {
    a {
      padding: 36px;

      &:first-child {
        width: 34%;
        background-image: url('https://source.unsplash.com/random/1920x1080/?nature no-repeat center center / cover');
      }

      &:last-child {
        width: 63%;
        background-image: url('https://source.unsplash.com/random/1920x1080/?restaurant no-repeat center center / cover');
      }

      & + a {
        margin-left: 3%;
      }
    }
  }

  .row.two {
    padding: 36px;
    background-image: url('https://source.unsplash.com/random/1920x1080/?epic no-repeat center center / cover');
    width: 100%;
  }

  .row.three {
    a {
      padding: 36px;

      &:first-child {
        width: 63%;
        background-image: url('https://source.unsplash.com/random/1920x1080/?car no-repeat');
      }

      &:last-child {
        width: 34%;
        background-image: url('https://source.unsplash.com/random/1920x1080/?beach no-repeat');
      }

      & + a {
        margin-left: 3%;
      }
    }
  }
`;
