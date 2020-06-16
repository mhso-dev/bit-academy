import styled from "styled-components";
import { useEffect, useCallback } from "react";

import CourseDescription from "./CourseDescription";
import CourseContentsTable from "./CourseContentsTable";
import CourseScheduleTable from "./CourseScheduleTable";
import CourseMethodTable from "./CourseMethodTable";
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

export default ({ togglePopup, popupContents, imagePopup }) => {
  const {
    courseTitle,
    courseSubTitle,
    courseIntroduction,
    courseGoal,
    courseTarget,
    courseSchedules,
    courseDetailInformation,
    courseContents,
    courseLisence,
    courseGuide,
    formUrl,
    doc_download,
    imageUrl,
    imageFormUrl,
    courseFeatures,
    coursePrivilege,
    cardInfomation,
  } = popupContents;

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
        {imagePopup ? (
          <>
            <a href={imageFormUrl}>
              <img
                src={imageUrl}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </a>
            <EnrolmentWrapper>
              <Button bgcolor={"#5da9dd"} href={imageFormUrl}>
                수강신청
              </Button>
              <Button bgcolor={"#606060"} onClick={togglePopup}>
                닫기
              </Button>
            </EnrolmentWrapper>
          </>
        ) : (
          <>
            <DocumentTitle>
              {courseTitle.mainTitle}{" "}
              {courseTitle.subTitle && (
                <span className="course-name">{courseTitle.subTitle}</span>
              )}
            </DocumentTitle>
            <DocumentSubTitle>
              <span className="doc_number">00</span>
              <div className="doc_title">{courseSubTitle}</div>
            </DocumentSubTitle>
            <DescWrapper>
              {courseIntroduction && (
                <CourseDescription
                  descTitle="과정소개"
                  descList={courseIntroduction}
                />
              )}
              {coursePrivilege && (
                <CourseDescription
                  descTitle={`교육과정\n특장점`}
                  descList={coursePrivilege}
                />
              )}
              {courseGoal && (
                <CourseDescription descTitle="교육목표" descList={courseGoal} />
              )}
              {courseTarget && (
                <CourseDescription
                  descTitle="교육대상"
                  descWithTitles={courseTarget}
                />
              )}
              {courseFeatures && (
                <CourseDescription
                  descTitle="교육특전"
                  descList={courseFeatures}
                />
              )}

              {courseSchedules && (
                <CourseDescription
                  descTitle="교육일정"
                  table={
                    <CourseScheduleTable
                      term={courseSchedules.term}
                      courseScheduleTime={courseSchedules.courseScheduleTime}
                    />
                  }
                />
              )}

              {courseDetailInformation && (
                <CourseDescription
                  descTitle={`교육방법\n상세안내`}
                  table={
                    <CourseMethodTable
                      courseDetailInformation={courseDetailInformation}
                    />
                  }
                />
              )}

              {courseContents && (
                <CourseDescription
                  descTitle={`교육내용`}
                  table={
                    <CourseContentsTable courseContents={courseContents} />
                  }
                />
              )}

              {courseLisence && (
                <CourseDescription
                  descWithTitles={courseLisence}
                  descTitle={`자격증\n안내`}
                />
              )}
              {cardInfomation && (
                <CourseDescription
                  descWithTitles={cardInfomation}
                  descTitle={`국민내일\n배움카드\n안내`}
                />
              )}
              {courseGuide && (
                <CourseDescription
                  descList={courseGuide}
                  descTitle={`신청안내`}
                />
              )}
              <EnrolmentWrapper>
                {doc_download && (
                  <Button bgcolor={"#105981"} href={doc_download}>
                    제출서류 다운로드
                  </Button>
                )}

                <Button bgcolor={"#5da9dd"} href={formUrl}>
                  수강신청
                </Button>
                <Button bgcolor={"#606060"} onClick={togglePopup}>
                  닫기
                </Button>
              </EnrolmentWrapper>
            </DescWrapper>
          </>
        )}
      </PopupInner>
    </PopupWrapper>
  );
};
