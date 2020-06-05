import styled from "styled-components";
import Head from "next/head";
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
  width: 70%;
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
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-gap: 1rem;
`;

const Card = styled.img``;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>비트교육센터에 오신 것을 환영합니다.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
          <Card src="dangi_c.jpg" alt="dangi_c" />
          <Card src="dangi_java.jpg" alt="dangi_java" />
          <Card src="dangi_jdbc.jpg" alt="dangi_jdbc" />
          <Card src="dangi_data.jpg" alt="dangi_data" />
        </DangiContainer>
        <GridTitle>4차산업 선도인력 양성</GridTitle>
        <SachaContainer>
          <Card src="aws_sacha.jpg" alt="sacha_cloud" />
          <Card src="cloud_bigdata_sacha.jpg" alt="sacha_aws" />
        </SachaContainer>
      </CardContainer>
    </Container>
  );
}
