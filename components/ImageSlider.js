import styled from "styled-components";
import { useState } from "react";

const BackgroundWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgColor};
  transition: background-color 2s ease-in-out;
`;

const ImageSliderWrapper = styled.div`
  padding: 0px;
  width: 55%;
  height: 100%;
  margin: auto;
`;

const BannerImage = styled.img`
  margin: auto;
  display: ${(props) => (props.active ? "block" : "none")};
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  animation: fadein 6s;
`;

const ImageSlider = ({ currentImage, BannerImageList, currentImageIndex }) => {
  return (
    <BackgroundWrapper bgColor={BannerImageList[currentImageIndex].bgColor}>
      <ImageSliderWrapper>
        {BannerImageList.map((item, index) => (
          <BannerImage
            key={index}
            src={item.imageName}
            active={item.imageName === currentImage}
          />
        ))}
      </ImageSliderWrapper>
    </BackgroundWrapper>
  );
};

export default ImageSlider;
