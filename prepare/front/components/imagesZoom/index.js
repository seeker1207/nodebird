import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import { Overlay, Global, SlickWrapper, ImgWrapper, Header, Indicator, CloseBtn } from './style';

const ImageZoom = function ({ images, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Overlay>
      <Global />
      <div>
        <Header>
          <h1>상세 이미지</h1>
          <CloseBtn onClick={onClose}>X</CloseBtn>
        </Header>
        <SlickWrapper>
          <div>
            <Slick
              initialSlide={0}
              afterChange={(slide) => setCurrentSlide(slide)}
              infinite
              arrows={false}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {images.map((v) => (
                <ImgWrapper key={v.src}>
                  <img src={`http://localhost:3065/${v.src}`} alt={v.alt} />
                </ImgWrapper>
              ))}
            </Slick>
            <Indicator>
              <div>
                {currentSlide + 1}
                {' '}
                {images.length}
              </div>
            </Indicator>
          </div>
        </SlickWrapper>
      </div>
    </Overlay>
  );
};

ImageZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageZoom;
