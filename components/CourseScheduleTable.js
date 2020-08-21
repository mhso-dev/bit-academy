import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";

const TableWrapper = styled.div`
  width: 100%;
  border-top: 3px solid #5da9dd;
  border-bottom: 3px solid #5da9dd;
`;

const CourseScheduleTable = styled.table`
  font-weight: 600;
  line-height: 1.2rem;
  font-size: 0.8rem;
  color: #606060;
  width: 100%;

  th {
    background-color: #d4f0fd;
    :not(:last-child) {
      border-right: 1px solid black;
    }
  }
  td {
    text-align: center;
    vertical-align: middle;
    :not(:last-child) {
      border-right: 1px solid black;
    }
  }

  tbody tr {
    :last-child,
    :first-child {
      border-bottom: none;
    }
    border-bottom: 1px solid black;
  }

  thead tr {
    border-bottom: 1px solid black;
  }
`;

export default ({ term, courseScheduleTime }) => {

  return (
    <TableWrapper>
      <CourseScheduleTable>
        <thead>
          <tr>
            <th>기 간</th>
            <th>시 간</th>
            <th>교육비</th>
            <th>교육방법</th>
          </tr>
        </thead>
        <tbody>
          {courseScheduleTime.map((data, index) =>
            data.courseCost.map((data2, index2) => (
              <tr key={Math.random()}>
                {index === 0 && index2 == 0 && (
                  <td rowSpan={3} style={{ borderBottom: "none" }}>
                    {term}
                  </td>
                )}
{/*                 
                {index2 === 0 && <td rowSpan={2}>{data.time.split("\n").map((timeText, index3) => 
                  index3 === data.time.split("\n").length - 1 ?
                  (
                    <>{timeText}</>
                  ) : (
                    <>
                      {timeText}<br/>
                    </>
                  )
                ) }</td>} */}

                {index2 === 0 && <td rowSpan={2}>{data.time}</td>}

                <td>{data2.cost}</td>
                <td>{data2.educationMethods}</td>
              </tr>
            ))
          )}
        </tbody>
      </CourseScheduleTable>
    </TableWrapper>
  );
};
