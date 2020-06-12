import styled from "styled-components";

const CourseMethodTable = styled.table`
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

export default ({ courseDetailInformation }) => {
  return (
    <>
      <CourseMethodTable>
        <colgroup>
          <col width="30%" />
          <col width="*" />
        </colgroup>
        <thead>
          <tr>
            <th>교육방법</th>
            <th>상세내용</th>
          </tr>
        </thead>
        <tbody>
          {courseDetailInformation.map((information, index) => (
            <tr key={index}>
              <td>{information.educationMethod}</td>
              <td>
                {information.educationMethodDetail.map((detailText) => (
                  <div>- {detailText}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </CourseMethodTable>
    </>
  );
};
