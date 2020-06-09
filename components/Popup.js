import styled from "styled-components";
import { useEffect, useCallback } from "react";

const PopupWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopupInner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  max-width: 40%;
  max-height: 90%;
  overflow-y: scroll;
  left: 10%;
  right: 10%;
  top: 5%;
  bottom: 5%;
  margin: auto;
  background: white;
  padding: 1rem;
`;

const DocumentTitle = styled.div`
  width: 60%;
  background-color: #105a83;
  color: white;
  padding: 0.75rem;
  border-radius: 20px 20px 0px 0px;
  font-weight: 500;
  .course-name {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const DocumentSubTitle = styled.div`
  margin-top: 5px;
  display: flex;
  .doc_number {
    font-weight: 800;
    font-size: 1.2rem;
    background-color: #2484c6;
    border-radius: 0px 0px 0px 20px;
    padding: 0.5rem;
    /* color: white; */
    color: transparent;
  }
  .doc_title {
    background-color: #5da9dd;
    width: 100%;
    padding: 0.5rem;
    color: white;
    font-weight: 600;
    border-radius: 0px 0px 20px 0px;
    margin-left: 5px;
  }
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const EnrolmentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Button = styled.a`
  text-decoration: none;
  margin: 1rem;
  padding: 1rem;
  color: white;
  border-radius: 5px;
  background-color: ${(props) => props.bgcolor};
  cursor: pointer;
`;

const DocumentDesc = ({ descTitle, desc, isTable, tableContents }) => {
  const Wrapper = styled.div`
    display: flex;
    margin-top: 1rem;
  `;

  const Title = styled.span`
    background-color: #5da9dd;
    padding: 5px;
    font-size: 0.7rem;
    color: white;
    font-weight: 400;
    border-radius: 3px;
    text-align: center;
    min-width: 3rem;
    height: 0.7rem;
    margin-right: 1rem;
  `;

  const Desc = styled.div`
    color: #606060;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1.2rem;
  `;

  const DescWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ContentsTable = styled.table`
    border-top: 3px solid #5da9dd;
    border-bottom: 3px solid #5da9dd;
    font-weight: 600;
    line-height: 1.2rem;
    font-size: 0.8rem;
    color: #606060;
    width: 100%;

    tr {
      th:not(:last-child),
      td:not(:last-child) {
        border-right: 1px solid black;
      }

      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
    th,
    td {
      padding: 5px;
    }
    thead {
      font-weight: 800;
      background-color: #d4f0fd;
    }
    td:first-child {
      background-color: #fffde0;
      text-align: center;
    }
    td:last-child {
      padding-left: 1.5rem;
    }
    .description-title {
      font-weight: 800;
      color: #105a83;
      font-size: 0.9rem;
    }
  `;

  return (
    <Wrapper>
      <Title>{descTitle}</Title>
      {isTable ? (
        <ContentsTable>
          <colgroup>
            <col width="20%" />
            <col width="*" />
          </colgroup>
          <thead>
            <tr>
              <th>구 분</th>
              <th>내 용(교과목)</th>
            </tr>
          </thead>
          <tbody>
            {tableContents.map((tableContent, index) => (
              <tr key={index}>
                <td>{tableContent.gubun}</td>
                <td>
                  <p className="description-title">
                    {tableContent.contents.title}
                  </p>
                  {tableContent.contents.detail.map((data, index) => (
                    <p key={index}>- {data}</p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </ContentsTable>
      ) : (
        <DescWrapper>
          {desc.map((value, index) => (
            <Desc key={index}>
              <span
                style={{
                  color: "#5da9dd",
                  fontWeight: "600",
                }}
              >
                ·
              </span>{" "}
              {value}
            </Desc>
          ))}
        </DescWrapper>
      )}
    </Wrapper>
  );
};

export default ({ togglePopup }) => {
  const handleUserKeyPress = useCallback((event) => {
    const { keyCode } = event;
    if (keyCode === 27) {
      togglePopup();
    }
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <PopupWrapper>
      <PopupInner>
        <DocumentTitle>
          4차산업분야 과정 <span className="course-name">빅데이터 과정</span>
        </DocumentTitle>
        <DocumentSubTitle>
          <span className="doc_number">48</span>
          <div className="doc_title">Java JDBC기반의 SQL 성능튜닝</div>
        </DocumentSubTitle>
        <DescWrapper>
          <DocumentDesc
            descTitle={"교육목표"}
            desc={[
              "JDBC기반 데이터베이스 애플리케이션 개발시 대용량 데이터 처리 시 발생하는 속도 저하 개선 및 성능을 고려한 코딩 방법과 사항을 이론과 실습을 통해 학습 하며, DBMS 아키텍쳐 이해를 기반으로 SQL 실행 원리와 성능 튜닝 원리 학습",
            ]}
          />
          <DocumentDesc
            descTitle={"교육대상"}
            desc={[
              "데이터베이스 관련 직무 재직자, SQL 학습이 필요한 재직자",
              "튜닝에 필수인 인덱스와 조인을 심도 있게 학습을 하려는 재직자",
            ]}
          />
          <DocumentDesc
            descTitle={"교육일정"}
            desc={["총 4일 / 32시간 / 09:00 ~ 18:00"]}
          />
          <DocumentDesc
            descTitle={"교육장소"}
            desc={[
              "비트컴퓨터 교육장 - 서울시 서초구 서초대로 74길 33 비트빌딩 3층",
            ]}
          />
          <DocumentDesc
            descTitle={"교육내용"}
            isTable
            tableContents={[
              {
                gubun: "1일차",
                contents: {
                  title: "[SQL 성능튜닝]",
                  detail: [
                    "대용량 데이터 생성, 프로그램 방식 성능 비교/분석",
                    "자바 기반 배치 프로그램 방식 성능 비교/분석",
                    "절차적/비절차적 프로그래밍, Array Processing",
                  ],
                },
              },
              {
                gubun: "2일차",
                contents: {
                  title: "[SQL 성능튜닝]",
                  detail: [
                    "Oracle DBMS 아키텍쳐(튜닝관점), Instance, Database, 논리적/물리적 저장구조",
                    "Parsing, Execute, Fetch, Physical, Logical read, Cache Hit, DML, SELECT",
                  ],
                },
              },
              {
                gubun: "3일차",
                contents: {
                  title: "[SQL 성능튜닝]",
                  detail: [
                    "Connection/Session, Optimizer의 이해, Connection/Session",
                    "옵티마이저의 개념 및 종류, 1규칙 기반 옵티마이저, 비용기반 옵티마이저",
                    "옵티마이저의 최적화를 위한 고려사항, CBO Statistics/Execution/Histogram",
                    "인덱스의 이해, 인덱스의 개념 및 작동원리, 인덱스 설계, 인덱스를 활용한 SQL 튜닝 사례",
                    "INNER JOIN, OUTER JOIN, CARTESIAN JOIN, SELF JOIN",
                  ],
                },
              },
              {
                gubun: "4일차",
                contents: {
                  title: "[SQL 성능튜닝]",
                  detail: [
                    "SQL의 튜닝 및 튜닝 실습 SQL 튜닝 원리, SQL 성능 비교 / 분석",
                    "사례별 튜닝기법 분석, 모니터링 및 분석, GC/Heavy SQL/ DBMS Instance",
                  ],
                },
              },
            ]}
          />
          <DocumentDesc
            descTitle={"신청안내"}
            desc={[
              "문의처: 비트교육센터 TEL 070-4166-2491 ",
              "서류는 hhji@bit.kr 로 제출 바랍니다. ",
            ]}
          />
          <EnrolmentWrapper>
            <Button bgcolor={"#105981"} href="/doc_jdbc.zip">
              제출서류 다운로드
            </Button>
            <Button
              bgcolor={"#5da9dd"}
              href="https://forms.gle/zcybDRdpvPUw7wSe6"
            >
              수강신청
            </Button>
            <Button bgcolor={"#606060"} onClick={togglePopup}>
              닫기
            </Button>
          </EnrolmentWrapper>
        </DescWrapper>
      </PopupInner>
    </PopupWrapper>
  );
};
