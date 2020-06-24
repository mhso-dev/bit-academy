import styled from "styled-components";
import Head from "next/head";
import Popup2 from "../components/Popup2";
import { useState, useCallback } from "react";
import Course_C_gen from "../utils/data-generator/short-term-course/Course_C_gen";
import Course_Java_gen from "../utils/data-generator/short-term-course/Course_Java_gen";
import Course_Python_gen from "../utils/data-generator/short-term-course/Course_Python_gen";
import Course_Jdbc_gen from "../utils/data-generator/short-term-course/Course_Jdbc_gen";
import Cloud_Bigdata_gen from "../utils/data-generator/short-term-course/Cloud_Bigdata_gen";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Container = styled.div`
  width: 100%;
  background-color: #dadee3;
`;

const HeaderWarningMessage = styled.div`
  padding: 1rem;
  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  p.message {
    font-size: 0.8rem;
  }
  p.tel {
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 400;
  }
  .wrapper {
    background-color: #d9d9d9;
    height: 300px;
    display: flex;
    & div.textWrapper {
      margin: auto;
      height: 250px;
      width: 50%;
      background-image: url("./warning.jpg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      text-align: center;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 5rem;
    }
  }
`;

const CardContainer = styled.div`
  width: 55vw;
  margin: auto;
`;

const SmallCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  justify-items: center;
`;

const GridTitle = styled.h1`
  margin-top: 1rem;
  color: #486da7;
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

const BigCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Card = styled.img`
  cursor: pointer;
`;

const BigCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .button__wrapper {
    margin-top: 10px;
    display: flex;
  }
`;

const BigCard = styled(Card)`
  cursor: default;
`;

const Button = styled.a`
  font-weight: 400;
  background-color: ${(props) => (props.isDetail ? "#11428c" : "#18ADB1")};
  color: white;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  margin-left: 10px;
  margin-bottom: 1rem;
  cursor: pointer;
  text-decoration: none;
`;

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupContents, setPopupContents] = useState(null);
  const [imagePopup, setImagePopup] = useState({});

  const togglePopup = useCallback(
    (data, imagePopupData = null) => {
      setPopupOpen(!popupOpen);
      if (imagePopupData) {
        setImagePopup(true);
        setPopupContents(imagePopupData);
      } else {
        setImagePopup(false);
        setPopupContents(data);
      }
    },
    [popupOpen, popupContents]
  );
  return (
    <Container>
      <Head>
        <title>비트교육센터에 오신 것을 환영합니다.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="비트교육센터 비트캠프 비트캠퍼스" />
        <meta
          name="keywords"
          content="프로그래밍 교육 비트교육센터 비트캠프 비트캠퍼스 자바 C C++ 국비지원 4차산업 AWS 빅데이터 클라우드 머신러닝 딥러닝"
        />
      </Head>
      {/* <HeaderWarningMessage>
        <div className="wrapper">
          <div className="textWrapper">
            <h1>[ 비트교육센터 임시 페이지 운영중 ]</h1>
            <p className="message">
              비트교육센터 홈페이지 이용에 불편을 드려서 대단히 죄송합니다.
              점검이 진행되는 동안 임시페이지를 운영 중이오니 양해 부탁드립니다.
            </p>
            <p className="tel">
              문의사항은 02)3486-3456 또는 카카오톡 '비트교육센터'검색
            </p>
            <p className="message" style={{ marginTop: "1rem" }}>
              * 홈페이지는 Chrome 브라우저에 최적화 되어있습니다. *
            </p>
          </div>
        </div>
      </HeaderWarningMessage> */}

      <Header />
      {popupOpen && (
        <Popup2
          togglePopup={togglePopup}
          popupContents={popupContents}
          imagePopup={imagePopup}
        />
      )}
      <CardContainer>
        <GridTitle>단기 핵심과정</GridTitle>
        <SmallCardContainer>
          <Card
            src="dangi_c.jpg"
            alt="dangi_c"
            onClick={() => togglePopup(Course_C_gen, null)}
          />
          <Card
            src="dangi_java.jpg"
            alt="dangi_java"
            onClick={() => togglePopup(Course_Java_gen, null)}
          />
          <Card
            src="dangi_python.jpg"
            alt="dangi_data"
            onClick={() => togglePopup(Course_Python_gen, null)}
          />
          <Card
            src="dangi_jdbc.jpg"
            alt="dangi_jdbc"
            onClick={() => togglePopup(Course_Jdbc_gen, null)}
          />
        </SmallCardContainer>
        <GridTitle>4차산업 선도인력 양성</GridTitle>
        <BigCardContainer>
          <BigCardWrapper>
            <BigCard className="sacha" src="cloud_bigdata_sacha.jpg" />
            <div className="button__wrapper">
              <Button
                isDetail
                onClick={() => togglePopup(Cloud_Bigdata_gen, null)}
              >
                상세보기
              </Button>
              <Button href="https://forms.gle/yDqrCBKKnnAnGE8r8">
                지원하기
              </Button>
            </div>
          </BigCardWrapper>
          <BigCardWrapper>
            <BigCard className="sacha" src="aws_sacha.jpg" alt="sacha_cloud" />
            <div className="button__wrapper">
              <Button
                isDetail
                href="https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=AIG20200000268656&tracseTme=1&crseTracseSe=C0061&trainstCstmrId=500020028183#undefined"
              >
                상세보기
              </Button>
              <Button href="https://forms.gle/6uJbhDGPU7gi2Y386">
                지원하기
              </Button>
            </div>
          </BigCardWrapper>
        </BigCardContainer>

        <BigCardContainer>
          <BigCardWrapper>
            <GridTitle>청년취업아카데미</GridTitle>
            <BigCard
              className="sacha"
              src="chung_nyun_main.jpg"
              alt="sacha_cloud"
            />
            <div className="button__wrapper">
              <Button
                isDetail
                onClick={() =>
                  togglePopup(null, {
                    imageUrl: "/chungnyun_detail.jpg",
                    imageFormUrl:
                      "https://docs.google.com/forms/d/e/1FAIpQLSd_50XGeRBdsoEqzL63YcK63RQVVcxNpryiGRcXJ5gE0OC2jA/viewform",
                    doc_download: "/청년취업아카데미 지원서 양식.doc",
                  })
                }
              >
                상세보기
              </Button>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSd_50XGeRBdsoEqzL63YcK63RQVVcxNpryiGRcXJ5gE0OC2jA/viewform">
                지원하기
              </Button>
            </div>
          </BigCardWrapper>
          <BigCardWrapper>
            <GridTitle>신입사원채용교육</GridTitle>
            <BigCard className="sacha" src="sinip_main.jpg" alt="sacha_cloud" />
            <div className="button__wrapper">
              <Button
                isDetail
                onClick={() =>
                  togglePopup(null, {
                    imageUrl: "/sinip_detail.jpg",
                    imageFormUrl:
                      "https://docs.google.com/forms/d/1KtIGD0qmiFblQszd-U_05D7JMr-TykcADBckP9PCtZs/edit",
                    doc_download: "/신입사원채용교육 지원서(양식).xls",
                  })
                }
              >
                상세보기
              </Button>
              <Button href="https://docs.google.com/forms/d/1KtIGD0qmiFblQszd-U_05D7JMr-TykcADBckP9PCtZs/edit">
                지원하기
              </Button>
            </div>
          </BigCardWrapper>
        </BigCardContainer>
      </CardContainer>
      <Footer />
    </Container>
  );
}
