import ImageSlider from "./ImageSlider";
import styled from "styled-components";
import { useState, useEffect } from "react";

const HeaderWraper = styled.div`
  display: flex;
  width: 100%;
`;

const LogoHeader = styled.div`
  width: 100%;
`;

export default () => {
  const BannerImageList = [
    { imageName: "./MainPage_AWSIoT.jpg", bgColor: "#004986" },
    { imageName: "./MainPage_CloudBigdata.jpg", bgColor: "#2C2D2C" },
  ];

  const [currentImage, setCurrentImage] = useState({
    bgImage: BannerImageList[0].imageName,
    bgColor: BannerImageList[0].bgColor,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval_id = setInterval(() => {
      if (currentImageIndex + 1 === BannerImageList.length) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }, 6000);

    return () => clearInterval(interval_id);
  }, [currentImageIndex]);

  useEffect(() => {
    setCurrentImage({
      bgImage: BannerImageList[currentImageIndex].imageName,
      bgColor: BannerImageList[currentImageIndex].bgColor,
    });
  }, [currentImageIndex]);

  return (
    <HeaderWraper bgColor={currentImage.bgColor}>
      <ImageSlider
        currentImage={currentImage.bgImage}
        BannerImageList={BannerImageList}
        currentImageIndex={currentImageIndex}
      />
    </HeaderWraper>
  );
};
