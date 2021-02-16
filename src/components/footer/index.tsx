import React from 'react';
import * as S from './style';

const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <div className="title-content">
          <strong className="title">growth plans</strong>
          <p className="subtitle">take your business to the next level</p>
        </div>

        <div id="bars">
          <div className="bar">
            <div className="top">
              <strong>$100</strong>
              <p>100 + hours</p>
            </div>
            <div className="bottom">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>

          <div className="bar">
            <div className="top">
              <strong>$150</strong>
              <p>180 + hours</p>
            </div>
            <div className="bottom">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>

          <div className="bar">
            <div className="top">
              <strong>$200</strong>
              <p>260 + hours</p>
            </div>
            <div className="bottom">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>

          <div className="bar">
            <div className="top">
              <strong>$250</strong>
              <p>380 + hours</p>
            </div>
            <div className="bottom">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>

          <div className="bar">
            <div className="top">
              <strong>$300</strong>
              <p>420 + hours</p>
            </div>
            <div className="bottom">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>

          <div className="bar">
            <div className="top">
              <strong>$350</strong>
              <p>520 + hours</p>
            </div>
            <div className="bottom">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>
        </div>
      </S.Wrapper>
    </S.Footer>
  );
};

export default Footer;
