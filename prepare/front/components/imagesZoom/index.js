import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from 'react-slick';
import styled, {createGlobalStyle} from "styled-components";
import {CloseOutlined} from "@ant-design/icons";

const Overlay = styled.div`
    position: fixed;
    z-index: 5000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Header = styled.header`
    header: 44px;
    background: white;
    position: relative;
    text-align: center;
    
    & h1 {
        margin: 0;
        font-size: 17px;
        color: #333;
        line-height: 44px;
    }
    
    & button {
        position: absolute;
        right: 0;
        top: 0;
        padding: 15px;
        line-height: 14px;
        cursor: pointer;
    }    
`;

const SlickWrapper = styled.div`
    height: calc(100% - 44px);
    background: #090909;
`

const ImgWrapper = styled.div`
    padding: 32px;
    text-align: center;
    
    & img {
        margin: 0 auto;
        max-height: 750px;
    }
`

const CloseBtn = styled(CloseOutlined)`
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    line-height: 14px;
    cursor: pointer;
`;

const Indicator = styled.div`
    text-align: center;
    
    & > div {
        width: 75px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        background: #313131;
        display: inline-block;
        text-align: center;
    }
`;

const Global = createGlobalStyle`
 .slick-slide {
    display: inline-block;
 }
`;
const ImageZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
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
                    <Slider
                        initialSlide={0}
                        afterChange={(slide) => setCurrentSlide(slide)}
                        infinite
                        arrow={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {images.map((v) => (
                            <ImgWrapper key={v.src}>
                                <img src={v.src} alt={v.alt}/>
                            </ImgWrapper>
                        ))}
                    </Slider>
                    <Indicator>
                        <div>
                            {currentSlide + 1}
                            {' '}
                            /
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            </SlickWrapper>
        </div>
        </Overlay>
    );
}

ImageZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImageZoom;