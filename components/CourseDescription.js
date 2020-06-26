import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-top: 1.2rem;
  width: 100%;
`;

const Title = styled.span`
  display: flex;
  background-color: #5da9dd;
  padding: 5px;
  font-size: 0.7rem;
  color: white;
  font-weight: 400;
  border-radius: 3px;
  text-align: center;
  min-width: 3rem;
  max-height: 2rem;
  min-height: 1rem;
  margin-right: 1rem;
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

export default ({ descTitle, descList, descWithTitles, table }) => {
  return (
    <Wrapper>
      <Title>
        {descTitle.split("\n").map((text, index) =>
          index === descTitle.split("\n").length - 1 ? (
            <>{text}</>
          ) : (
            <>
              {text}
              <br />
            </>
          )
        )}
      </Title>
      <DescWrapper>
        {descWithTitles ? (
          descWithTitles.map((descWithTitle) => (
            <Desc>
              <CourseTitle>{descWithTitle.descriptionTitle}</CourseTitle>

              {descWithTitle.descriptionContents.map((content) => (
                <>
                  <span
                    style={{
                      color: "#5da9dd",
                      fontWeight: "600",
                    }}
                  >
                    ·
                  </span>{" "}
                  {content}
                  <br />
                </>
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
