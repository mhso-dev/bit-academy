export default {
  courseTitle: { mainTitle: "4차산업분야 과정", subTitle: "빅데이터 과정" },
  courseSubTitle: "Java JDBC기반의 SQL 성능튜닝",
  courseGoal: [
    "JDBC기반 데이터베이스 애플리케이션 개발시 대용량 데이터 처리 시 발생하는 속도 저하 개선 및 성능을 고려한 코딩 방법과 사항을 이론과 실습을 통해 학습 하며, DBMS 아키텍쳐 이해를 기반으로 SQL 실행 원리와 성능 튜닝 원리 학습",
  ],
  courseTarget: [
    {
      targetDescription: [
        "데이터베이스 관련 직무 재직자, SQL 학습이 필요한 재직자",
        "튜닝에 필수인 인덱스와 조인을 심도 있게 학습을 하려는 재직자",
      ],
    },
  ],
  courseSchedules: {
    term: "총 4일 / 32시간",
    courseScheduleTime: [
      {
        time: "09:00 ~ 18:00",
        courseCost: [
          {
            cost: "0원",
            educationMethods: "오프라인",
          },
        ],
      },
    ],
  },
  courseDetailInformation: [
    {
      educationMethod: "오프라인(대면강의)",
      educationMethodDetail: [
        "비트교육센터 강의장에서 강의 진행",
        "서울시 서초구 서초대로 74길 33, 비트빌딩",
      ],
    },
  ],
  courseContents: [
    {
      day: "1일",
      title: "[SQL 성능튜닝]",
      contents: [
        "대용량 데이터 생성, 프로그램 방식 성능 비교/분석",
        "자바 기반 배치 프로그램 방식 성능 비교/분석",
        "절차적/비절차적 프로그래밍, Array Processing",
      ],
    },
    {
      day: "2일",
      title: "[SQL 성능튜닝]",
      contents: [
        "Oracle DBMS 아키텍쳐(튜닝관점), Instance, Database, 논리적/물리적 저장구조",
        "Parsing, Execute, Fetch, Physical, Logical read, Cache Hit, DML, SELECT",
      ],
    },
    {
      day: "3일",
      title: "[SQL 성능튜닝]",
      contents: [
        "Connection/Session, Optimizer의 이해, Connection/Session",
        "옵티마이저의 개념 및 종류, 1규칙 기반 옵티마이저, 비용기반 옵티마이저",
        "옵티마이저의 최적화를 위한 고려사항, CBO Statistics/Execution/Histogram",
        "인덱스의 이해, 인덱스의 개념 및 작동원리, 인덱스 설계, 인덱스를 활용한 SQL 튜닝 사례",
        "INNER JOIN, OUTER JOIN, CARTESIAN JOIN, SELF JOIN",
      ],
    },
    {
      day: "4일",
      title: "[SQL 성능튜닝]",
      contents: [
        "SQL의 튜닝 및 튜닝 실습 SQL 튜닝 원리, SQL 성능 비교 / 분석",
        "사례별 튜닝기법 분석, 모니터링 및 분석, GC/Heavy SQL/ DBMS Instance",
      ],
    },
  ],

  courseGuide: [
    "문의 : 비트교육센터 Tel. 02-3486-1780",
    "서류는 hhji@bit.kr 로 제출 바랍니다. ",
  ],
  formUrl: "https://forms.gle/zcybDRdpvPUw7wSe6",
  doc_download: "/doc_jdbc.zip",
};
