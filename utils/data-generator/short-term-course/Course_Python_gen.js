export default {
  courseTitle: { mainTitle: "Python Programming" },
  courseSubTitle: "파이썬으로 시작하는 프로그래밍 입문",
  courseGoal: [
    "프로그래밍 언어에 대한 기본적인 개념 이해",
    "파이썬의 내장형식과 함수들을 연습해서 간단하고 반복적인 업무를 코드로 작성능력 배양",
    "파이썬 언어의 문법을 학습해서 간단한 함수나 클래스를 사용하는 능력 배양",
    "웹크롤링 프로그램을 통해 데이터를 자동으로 수집하여 사용하는 능력 배양",
  ],
  courseTarget: [
    {
      descriptionTitle: "프로그래밍이 낯선 당신! Python부터!",
      descriptionContents: [
        `
        프로그래밍 언어를 공부하는 이들의 첫 번째 고민은 “어떤 프로그래밍 언어를 가장 먼저 공부할까? 입니다. 이
물음에 대해서 여러 가지 접근 방식이 존재할 수 있지만 1차적으로 생각할 수 있는 방식은 ”가장 인기 있는 프
로그래밍 언어부터 공부할 것“이라고 할 수 있습니다.\n\n
파이썬은 현재 최고의 인기를 구하하고 있는 프로그래밍 언어입니다. 프로그래밍 언어의 인기 지표 중 하나인
TIOBE Index에서 꾸준히 그 순위가 높아지고 있는 추세이며, 구글, 유튜브 등의 세계 주요 IT 기업뿐만 아니라
미 항공우주국 NASA에서도 개발 언어로 채택해 활용하고 있습니다. 현재 수많은 레퍼런스를 보유하고 있어
진입장벽이 낮고, 활용도가 높은 프로그래밍 언어라 할 수 있습니다.\n\n
파이썬 언어는 특유의 쉬운 문법과 폭넓은 활용도를 바탕으로 그 사용자층을 점점 더 넓혀가고 있으며 아이비
리그를 비롯한 미국 대학에서도 첫 프로그래밍 언어로 파이썬을 채택하는 추세입니다.`,
      ],
    },
    {
      descriptionTitle: "파이썬을 공부하면...",
      descriptionContents: [
        "객체지향 프로그래밍의 원리를 이해하고 이에 따라 소프트웨어를 구현할 수 있습니다.",
        "개인 블로그, 회사 홈페이지, 웹 애플리케이션 등 다양한 웹서비스를 직접 개발할 수 있습니다.",
        "현업의 데이터 사이언티스트들이 활용하는 다양한 라이브러리를 활용해 나만의 데이터",
      ],
    },
  ],
  courseSchedules: {
    term: "2020.08.03.월 ~ 08.27.목",
    courseScheduleTime: [
      {
        time: "14:00 ~ 17:00",
        courseCost: [
          {
            cost: "320,000원",
            educationMethods: "오프라인",
          },
          {
            cost: "200,000원",
            educationMethods: "온라인",
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
        "서울시 서초구 서초대로 74길 33, 비트빌딩 3층",
      ],
    },
    {
      educationMethod: "온라인(비대면강의)",
      educationMethodDetail: [
        "수업운영 플랫폼(Zoom)을 활용한 온라인 강의",
        "수업교재 제공",
        "4+1 요일제 운영 : 매주 온라인 교육 (월~목), 오프라인 질의응답 미팅 진행 (금)",
        "오프라인 질의응답 미팅은 매주 금요일 10:00 ~ 13:00 에 운영",
        "강의 참여방법 : 단톡방을 개설 후 수업진행 코드를 링크(공유)",
        "개인 노트북/PC 필수",
      ],
    },
  ],
  courseContents: [
    { contentsTitle: "1단계 / 파이썬 기초" },
    {
      day: "1일",
      contents: [
        "파이썬 시작하기",
        "소개",
        "설치 및 개발환경",
        "파이썬 프로그램 작성과 실행",
      ],
    },
    {
      day: "2일",
      contents: [
        "파이썬 문법 I",
        "변수명과 예약어",
        "자료형과 연산자",
        "객체, 제어문, 함수, 입출력",
      ],
    },
    {
      day: "3일",
      contents: ["파이썬 문법 II", "모듈, 클래스, 예외처리"],
    },
    { contentsTitle: "2단계 / 파이썬 응용 (윈도우 프로그래밍)" },
    {
      day: "4일",
      contents: [
        "Tkinter 활용",
        "GUI폼 만들기 및 위젯 추가",
        "레이아웃 관리",
        "wxPython 라이브러리 활용",
      ],
    },
    {
      day: "금,토,일",
      contents: ["미니 계산기, 구구단 파이터 개발해 보기"],
    },
    { contentsTitle: "3단계 / 파이썬 응용 (네트워크 프로그래밍)" },
    {
      day: "5일",
      contents: [
        "네트워크 프리미어",
        "네트워크 네트워킹",
        "Internet의 이해",
        "소켓이란?",
        "포트번호",
      ],
    },
    {
      day: "6일",
      contents: [
        "소켓 프로그래밍",
        "Echo Server/Client 작성",
        "Simple Web Server 작성",
      ],
    },
    {
      day: "7일",
      contents: ["미니프로젝트, 채팅서버/클라이언트 작성"],
    },
    { contentsTitle: "4단계 / 파이썬 응용 (웹 크롤러)" },
    {
      day: "8일",
      contents: [
        "SNS API활용",
        "urllib.Request 모듈을 이용한 HTTP 통신",
        "JSON 이해",
        "페이스북 API를 이용한 크롤링",
      ],
    },
    {
      day: "9일",
      contents: ["공공 API를 활용한 크롤러 작성하기"],
    },
    {
      day: "10일",
      contents: [
        "일반적인 웹 서비스 데이터 크롤링",
        "BeautifulSoup을 활용한 HTML 파싱",
        "urllib.request 모듈을 이용한 네이버 영화 랭킹",
        "Selenium 라이브러리 활용한 동적 웹페이지 크롤링",
      ],
    },
    { contentsTitle: "5단계 / 파이썬 응용 (웹 프로그래밍 Django)" },
    {
      day: "11일",
      contents: [
        "Django 프레임워크",
        "파이썬 웹표준 라이브러리 살펴보기",
        "Django 설치",
        "MTV 패턴",
        "장고 웹 애블리케이션의 구조",
        "emaillist 애플리케이션 작성하기",
      ],
    },
    {
      day: "12일",
      contents: [
        "MySite 개발",
        "HTML/CSS 빠르게 살펴보기",
        "Model(DB CRUD) 및 ORM 이해",
        "Template 스크립팅",
        "View 작성하기",
        "세션 관리",
      ],
    },
    {
      day: "13일",
      contents: ["미니프로젝트", "MySite에 게시판 애블리케이션 추가하기"],
    },
    { contentsTitle: "6단계 / 파이썬 응용 (데이터분석 및 시각화)" },
    {
      day: "14일",
      contents: [
        "파이썬 라이브러리를 활용한 데이터분석",
        "자연어처리 라이브러리 활용(nltk, KoNLpy)",
        "데이터처리 라이브러리 활용(NumPy, Pandas)",
      ],
    },
    {
      day: "15일",
      contents: [
        "파이썬 라이브러리를 활용한 데이터분석",
        "자연어처리 라이브러리 활용(nltk, KoNLpy)",
        "데이터처리 라이브러리 활용(NumPy, Pandas)",
      ],
    },
    {
      day: "16일",
      contents: [
        "미니프로젝트",
        "공공 API를 활용한 데이터분석 및 시각화",
        "트위터 API를 활용한 데이터분석 및 시각화",
        "전국 치킨 프렌차이즈 통계데이터분석 및 시각화",
      ],
    },
  ],

  courseGuide: ["문의 : 비트교육센터 Tel. 02-3486-1780"],
  formUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdhZQPb8mT-8J6z8-7A4TkefxUKRRvWBjOdI_hiQXl8rvkeYA/viewform?usp=sf_link",
};
