import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Carousel from slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <Link to="/home">
          <img src="/images/slider-badag.jpg" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/home">
          <img src="/images/slider-badging.jpg" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/home">
          <img src="/images/slider-scale.jpg" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/home">
          <img src="/images/slider-scales.jpg" alt="" />
        </Link>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin: 20px 0;
  text-align: left;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -50px;
  }
  .slick-next {
    right: -50px;
  }
`;
const Wrap = styled.div`
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    margin: 0 5px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid #efefef;
    }
  }
`;


export default ImageSlider;
