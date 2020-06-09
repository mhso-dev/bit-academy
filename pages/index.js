import styled from "styled-components";
import Head from "next/head";
import Popup from "../components/Popup";
import { useState, useCallback } from "react";
const Container = styled.div``;

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
  width: 55%;
  margin: auto;
`;

const DangiContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`;

const GridTitle = styled.h1`
  margin-top: 1rem;
  color: #486da7;
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

const SachaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  grid-gap: 1rem;
  margin-bottom: 10px;
`;

const Card = styled.div`
  width:300px;
  height:350px;
  background-image: url("./${(props) => props.background}");
  background-size:auto;
  background-repeat:no-repeat;
`;
const SachaCard = styled(Card)`
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const SachaLink = styled.a`
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
  const togglePopup = useCallback(() => {
    setPopupOpen(!popupOpen);
  }, [popupOpen]);
  return (
    <Container>
      {popupOpen && <Popup togglePopup={togglePopup} />}
      <Head>
        <title>비트교육센터에 오신 것을 환영합니다.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="비트교육센터 비트캠프 비트캠퍼스" />
        <meta
          name="keywords"
          content="프로그래밍 교육 비트교육센터 비트캠프 비트캠퍼스 자바 C C++ 국비지원 4차산업 AWS 빅데이터 클라우드 머신러닝 딥러닝"
        />
      </Head>
      <HeaderWarningMessage>
        <div className="wrapper">
          <div className="textWrapper">
            <h1>[ 비트교육센터 홈페이지 시스템 점검중 ]</h1>
            <p className="message">
              비트교육센터 홈페이지 이용에 불편을 드려서 대단히 죄송합니다.
              점검이 진행되는 동안 임시페이지를 운영 중이오니 양해 부탁드립니다.
            </p>
            <p className="tel">
              문의사항은 02)3486-3456 또는 카카오톡 '비트교육센터'검색
            </p>
          </div>
        </div>
      </HeaderWarningMessage>
      <CardContainer>
        <GridTitle>단기 핵심과정</GridTitle>
        <DangiContainer>
          <Card background="dangi_c.jpg" alt="dangi_c" />
          <Card background="dangi_java.jpg" alt="dangi_java" />
          <Card background="dangi_python.jpg" alt="dangi_data" />
          <Card
            background="dangi_jdbc.jpg"
            alt="dangi_jdbc"
            style={{ cursor: "pointer" }}
            onClick={togglePopup}
          />
        </DangiContainer>
        <GridTitle>4차산업 선도인력 양성</GridTitle>
        <SachaContainer>
          <SachaCard
            className="sacha"
            background="aws_sacha.jpg"
            alt="sacha_cloud"
          >
            <SachaLink
              isDetail
              href="https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=AIG20200000268656&tracseTme=1&crseTracseSe=C0061&trainstCstmrId=500020028183#undefined"
            >
              상세보기
            </SachaLink>
            <SachaLink href="https://forms.gle/6uJbhDGPU7gi2Y386">
              지원하기
            </SachaLink>
          </SachaCard>
          <SachaCard
            className="sacha"
            background="cloud_bigdata_sacha.jpg"
            alt="sacha_aws"
          >
            <SachaLink
              isDetail
              href="https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=AIG20200000268658&tracseTme=1&crseTracseSe=C0061&trainstCstmrId=500020028183#undefined"
            >
              상세보기
            </SachaLink>
            <SachaLink href="https://forms.gle/yDqrCBKKnnAnGE8r8">
              지원하기
            </SachaLink>
          </SachaCard>
        </SachaContainer>
      </CardContainer>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_50XGeRBdsoEqzL63YcK63RQVVcxNpryiGRcXJ5gE0OC2jA/viewform?usp=sf_link">
          <img src="./banner1.jpg" style={{ minWidth: "50vw" }} />
        </a>
      </div>
    </Container>
  );
}
