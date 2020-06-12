import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-top: 1.2rem;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
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
  height: 1.3rem;
  justify-content: center;
  align-items: center;
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
  width: 100%;
`;

const CourseTitle = styled.div`
  font-weight: 800;
  font-size: 0.9rem;
  line-height: 1.5rem;
  color: black;
`;

export default ({
  descTitle,
  descList,
  courseTarget,
  courseLisence,
  table,
}) => {
  return (
    <Wrapper>
      <Title>
        {descTitle.split("\n")[0]}
        <br />
        {descTitle.split("\n")[1]}
      </Title>
      <DescWrapper>
        {courseLisence ? (
          <Desc>
            <CourseTitle>{courseLisence.lisenceTitle}</CourseTitle>
            <span
              style={{
                color: "#5da9dd",
                fontWeight: "600",
              }}
            >
              ·
            </span>{" "}
            {courseLisence.lisenceDescription}
          </Desc>
        ) : courseTarget ? (
          courseTarget.map((courseInfo, index) => (
            <Desc key={index}>
              {courseInfo.targetTitle && (
                <CourseTitle>{courseInfo.targetTitle}</CourseTitle>
              )}

              {courseInfo.targetDescription.map((targetDesc, index) => (
                <div key={index}>
                  <span
                    style={{
                      color: "#5da9dd",
                      fontWeight: "600",
                    }}
                  >
                    ·
                  </span>{" "}
                  {targetDesc}
                </div>
              ))}
            </Desc>
          ))
        ) : table ? (
          <div style={{ width: "100%" }}>{table}</div>
        ) : (
          descList.map((desc, index) => (
            <Desc key={index}>
              <span
                style={{
                  color: "#5da9dd",
                  fontWeight: "600",
                }}
              >
                ·
              </span>{" "}
              {desc}
            </Desc>
          ))
        )}
      </DescWrapper>
    </Wrapper>
  );
};
