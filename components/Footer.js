import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  background-color: #122139;
  display: flex;
  flex-direction: column;
`;

const FooterTopBox = styled.div`
  border-bottom: 1px solid #516077;
`;
const FooterTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 55%;

  margin: auto;

  a {
    margin: 5px;
  }
`;
const FooterBottomWrapper = styled.div`
  display: flex;
  padding: 15px;
  width: 55%;
  margin: auto;
  justify-content: space-between;
`;

const ContentsDescriptBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 150px;
  }

  p {
    color: #516077;
    line-height: 1.5rem;
    font-weight: 700;
    font-size: 0.7rem;
  }
`;

export default () => {
  return (
    <FooterContainer>
      <FooterTopBox>
        <FooterTopWrapper>
          <a href="http://bitacademy.blog.me" target="_blank">
            <img src="./btn_footer_Blog.png" />
          </a>
          <a href="https://www.facebook.com/Bitschool" target="_blank">
            <img src="./btn_footer_Facebook.png" />
          </a>
          <a href="https://twitter.com/bit_academy" target="_blank">
            <img src="./btn_footer_Twitter.png" />
          </a>
        </FooterTopWrapper>
      </FooterTopBox>
      <FooterBottomWrapper>
        <ContentsDescriptBox>
          <img src="./logo.png" />
          <p>
            서울특별시 서초구 서초대로74길33 비트빌 3층 | 사업자등록번호
            220-81-29726 | 대표이사 조현정 | 법인명 (주)비트컴퓨터
          </p>
          <p>
            TEL 02-3486-3456 | FAX 02-3486-7890 | 통신판매업 신고번호 서울서초
            2003-02577호
          </p>
          <p>
            COPYRIGHT BY BITACADEMY CO.LTD. ALL RIGHTS RESERVED.
            HTTP://www.BITacademy.com
          </p>
        </ContentsDescriptBox>
        <img src="./qr.png" />
      </FooterBottomWrapper>
    </FooterContainer>
  );
};
