import ImageSlider from "./ImageSlider";
import styled from "styled-components";
import { useState, useEffect } from "react";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackgroundWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const LogoHeader = styled.div`
  padding: 1rem;
  display: flex;
  width: 55%;
  align-items: center;
  margin: auto;
`;

const Slogan = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  margin-left: 0.7rem;
`;

const LogoImage = styled.img`
  max-height: 3vh;
`;

export default () => {
  const BannerImageList = [
    { imageName: "./MainPage_AWSIoT.jpg", bgColor: "#004986" },
    { imageName: "./MainPage_CloudBigdata.jpg", bgColor: "#87b7ff" },
    { imageName: "./MainPage_CNN.jpg", bgColor: "#2C2D2C" },
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
    <HeaderContainer>
      <LogoHeader>
        <LogoImage src="./logo.png" />
        <Slogan>
          <span>
            입학이 긍지가 되고 수료가 날개가 되는{" "}
            <span style={{ color: "#1498be" }}>
              상위1%전문가 양성을 위한 교육
            </span>
          </span>
        </Slogan>
      </LogoHeader>
      <BackgroundWrapper bgColor={currentImage.bgColor}>
        <ImageSlider
          currentImage={currentImage.bgImage}
          BannerImageList={BannerImageList}
          currentImageIndex={currentImageIndex}
        />
      </BackgroundWrapper>
    </HeaderContainer>
  );
};
