import styled from "styled-components";

const CourseContentsTable = styled.table`
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
    vertical-align: middle;
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

export default ({ courseContents }) => {
  return (
    <>
      <CourseContentsTable>
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
          {courseContents.map((courseContent, index) => (
            <tr key={index}>
              {courseContent.contentsTitle ? (
                <td
                  colSpan={2}
                  style={{
                    backgroundColor: "#d4f0fd",
                    // borderTop: "2px solid black",
                    // borderBottom: "2px solid black",
                  }}
                >
                  {courseContent.contentsTitle}
                </td>
              ) : (
                <>
                  <td>{courseContent.day}</td>
                  <td>
                    {courseContent.title && (
                      <p className="description-title">{courseContent.title}</p>
                    )}

                    {courseContent.contents.map((content, index) => (
                      <p key={index}>- {content}</p>
                    ))}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </CourseContentsTable>
    </>
  );
};
