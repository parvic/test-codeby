import React from 'react';
import * as S from './style';

const Table = () => {
  return (
    <S.Main>
      <div className="title-content">
        <strong>categories</strong>
        <p>discver new possibilities to help today</p>
      </div>

      <div id="rows">
        <div className="row one">
          <a href="google.com">
            <strong>nature</strong>
            <p>Lorem ipsum dolor sit amet</p>
            {/* <img src="https://source.unsplash.com/random/400x400" alt="" /> */}
          </a>
          <a href="google.com">
            <strong>daily</strong>
            <p>Praesent tincidunt consectetur diam</p>
            {/* <img src="https://source.unsplash.com/random/200x400" alt="" /> */}
          </a>
        </div>

        <div className="row two">
          <a href="google.com">
            <strong>together</strong>
            <p>Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum</p>
            {/* <img src="https://source.unsplash.com/random/600x400" alt="" /> */}
          </a>
        </div>

        <div className="row three">
          <a href="google.com">
            <strong>analysis</strong>
            <p>Duis sollicitudin mauris vitae venenatis aliquet</p>
            {/* <img src="https://source.unsplash.com/random/200x400" alt="" /> */}
          </a>
          <a href="google.com">
            <strong>pictures</strong>
            <p>Quisque eu nisl purus</p>
            {/* <img src="https://source.unsplash.com/random/400x400" alt="" /> */}
          </a>
        </div>
      </div>
    </S.Main>
  );
};

export default Table;
