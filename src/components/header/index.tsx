import React from 'react';
import * as S from './style';

const Header = () => {
  return (
    <S.Header>
      <div className="shade">
        <div className="content">
          <img src="https://source.unsplash.com/random/150x150" alt="logo" />
          <strong>we have ideas to </strong>
          <strong> growth your business</strong>
          <button type="button">SEE NOW</button>
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
