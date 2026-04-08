export const siteConfig = {
  name: '마인드프로필',
  fullName: "진로진학입시 교육컨설팅 '마인드프로필'",
  description: '급변하는 입시체제, 우리 아이의 유형을 진단하고 맞춤 로드맵을 설계합니다.',
  kakaoId: 'jjj4676',
  instagram: 'https://www.instagram.com/cool_seungho',
  instagramHandle: '@cool_seungho',
  applyCoaching: 'https://forms.gle/Btq1s81nddWJiAhm6',
  applyConsulting: 'https://forms.gle/icT4A1NLnpgdnood7',
  bookUrl: 'https://search.shopping.naver.com/book/catalog/59130798312',
  articleUrl: 'https://www.veritas-a.com/news/articleView.html?idxno=603045',
};

export const worries = [
  '아이가 공부는 하는데 성적이 안 오르는 이유를 모르겠어요',
  '입시가 바뀐다는데 뭘 준비해야 할지 막막해요',
  '학원만 보내면 되는 줄 알았는데... 방향이 없었어요',
  '주변 아이들은 벌써 로드맵이 있다던데, 우리 아이만 뒤처지는 건 아닌지...',
  '중학교 때 잡아야 한다는데, 이미 늦은 건 아닌지 불안해요',
];

export const coachingPrograms = [
  {
    id: 'elementary-middle',
    title: '초5 ~ 중3 코칭',
    target: '초등 5학년 ~ 중학교 3학년',
    items: [
      '유형 진단 및 분석',
      '독서 및 독해력 진단 및 미션 점검',
      '진로진학 및 적성 진단 후 로드맵 설계',
      '스케줄 | 학습/학업 역량 진단 및 점검',
      '입시 로드맵 설계',
    ],
    applyUrl: siteConfig.applyCoaching,
  },
  {
    id: 'high-school',
    title: '고1 ~ 고2 코칭',
    target: '고등학교 1학년 ~ 2학년',
    items: [
      '진로진학 및 적성 유형 점검',
      '목표 대학 및 전공 설계',
      '전공에 맞춘 학생부 관리',
      '독해력 및 학업역량 향상을 위한 점검',
    ],
    applyUrl: siteConfig.applyCoaching,
  },
  {
    id: 'senior',
    title: '고3 입시 컨설팅',
    target: '고등학교 3학년',
    items: [
      '지원 전략 수립',
      '자기소개서 컨설팅',
      '면접 대비',
      '최종 지원 대학 결정',
    ],
    applyUrl: siteConfig.applyConsulting,
    highlight: true,
  },
];

export const achievements = [
  {
    category: '자율중학교',
    schools: ['화산중'],
    description: '전국 단위 자율중학교 합격생 배출',
  },
  {
    category: '특목고 · 자사고',
    schools: ['과학고', '외고', '상산고', '대신고'],
    description: '특수목적고 및 자율형사립고 합격생 배출',
  },
  {
    category: '대학 · 의약학',
    schools: ['서울대', '연세대', '고려대', 'KAIST'],
    description: '전국 주요 의약학 계열 합격생 배출',
  },
];

export const profile = {
  name: '진승호',
  title: '마인드프로필 대표',
  quote: '아이의 유형을 먼저 알아야 공부의 방향이 보입니다.',
  credentials: [
    { category: '대표', items: ["교육컨설팅 '마인드 프로필' 대표", '진로진학센터 [꿈틀] 대표 컨설턴트'] },
    { category: '저서', items: ["도서 '성향 기반 중학 진로 로드맵' 집필"] },
    {
      category: '자격 및 위원',
      items: [
        '한국교육컨설턴트협의회 진로진학상담사',
        '한국진로진학협회 연구위원',
        '미래교육디자이너그룹 교육위원',
        '전국 학부모 포럼 [교담] 입시 전문위원',
        '교담 | Sixth Sense 입시코치',
      ],
    },
    {
      category: '교육 현장',
      items: [
        '남대전고등학교 진로멘토 교사',
        '대건고, 대신고 자소서/면접캠프 위원',
        "도서 '면접 끝판왕(심화편)' 검토위원",
        "도서 '학생부 끝판왕(증보판)' 검토위원",
      ],
    },
  ],
};

export const testimonials = [
  {
    quote: '처음엔 반신반의했는데, 아이의 유형을 알고 나니 공부 방향이 완전히 달라졌어요.',
    author: '중2 학부모 K씨',
    tags: ['유형진단', '방향설정'],
  },
  {
    quote: '상산고 합격은 진승호 선생님 없이는 불가능했을 거예요.',
    author: '고1 학부모 P씨',
    tags: ['상산고', '합격'],
  },
  {
    quote: '1년 코칭 후 아이가 스스로 공부 계획을 세우기 시작했어요. 이게 진짜 변화입니다.',
    author: '중3 학부모 L씨',
    tags: ['자기주도', '변화'],
  },
  {
    quote: '로드맵 없이 학원만 보내던 시절이 얼마나 비효율적이었는지 깨달았어요.',
    author: '초6 학부모 M씨',
    tags: ['로드맵', '효율'],
  },
  {
    quote: '과학고 준비 과정에서 아이의 강점을 정확히 짚어주셨어요. 결국 합격했습니다.',
    author: '중3 학부모 S씨',
    tags: ['과학고', '합격'],
  },
];

export const faqData = [
  {
    question: '학원과 뭐가 다른가요?',
    answer:
      '학원은 지식을 전달합니다. 마인드프로필은 아이의 유형을 먼저 진단하고, 그에 맞는 학습 방향과 입시 전략을 1:1로 설계합니다. 방향 없이 공부하는 것과 정확한 진단 위에 로드맵을 세우는 것은 완전히 다른 결과를 만듭니다.',
  },
  {
    question: '정말 효과가 있나요?',
    answer:
      '매년 과학고, 외고, 상산고, 서연고, 의약학 합격생을 배출하고 있습니다. 유형 진단 기반의 맞춤 코칭은 아이의 학습 효율을 근본적으로 바꿉니다.',
  },
  {
    question: '비용이 부담됩니다.',
    answer:
      '방향 없이 3~4개 학원을 다니는 비용과, 정확한 진단 위에 1년간 전략적으로 관리받는 비용 중 어느 쪽이 더 효율적인지 생각해 보세요. 마인드프로필은 비용이 아닌 투자입니다.',
  },
  {
    question: '지방인데 가능한가요?',
    answer:
      '온라인 코칭이 가능합니다. 전국 어디서든 동일한 프로그램을 받으실 수 있습니다.',
  },
  {
    question: '아이가 거부감을 보이면요?',
    answer:
      '유형 진단 자체가 아이에게 흥미를 유발합니다. "너는 이런 유형이야"라는 이해가 선행되면 아이 스스로 동기가 생깁니다.',
  },
  {
    question: '장기 코칭은 어떻게 진행되나요?',
    answer:
      '1년 단위로 매년 3월부터 다음해 2월까지(학사기준) 진행됩니다. 월 1~2회 정기 상담과 수시 점검으로 아이의 성장을 함께 관리합니다.',
  },
];

export const bookReviews = [
  { url: 'https://blog.naver.com/evlyn_23/224223736130', source: '블로그 서평' },
  { url: 'https://blog.naver.com/borobong0314/224241287892', source: '블로그 서평' },
  { url: 'https://blog.naver.com/wonjjin2/224225566633', source: '블로그 서평' },
  { url: 'https://blog.naver.com/ection83/224209635379', source: '블로그 서평' },
  { url: 'https://blog.naver.com/iamyonc/224216537793', source: '블로그 서평' },
  { url: 'https://blog.naver.com/bbasha_daily/224209528605', source: '블로그 서평' },
];

export const navItems = [
  { label: '프로그램', href: '#programs' },
  { label: '합격 실적', href: '#achievements' },
  { label: '대표 소개', href: '#profile' },
  { label: '후기', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];
