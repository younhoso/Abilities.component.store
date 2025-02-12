import { MetadataRoute } from 'next';

export type Category = {
  title: string;
  url: string;
  lastModified: Date;
  changeFrequency: string;
  priority: number;
};

const defaultSiteMaps: MetadataRoute.Sitemap = [
  //1 알림 팝업
  {
    url: '/alert',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 2,
  },
  //2 컴펌 창
  {
    url: '/confirm',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
  //3 일반 켈린더
  {
    url: '/daypicker',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
  //4 예약 켈린더
  {
    url: '/daypickerRange',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.2,
  },
  //5 무한 스크롤
  {
    url: '/infiniteScroll',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  //6 팝업 스와이퍼 이벤트
  {
    url: '/bottomsheet',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.4,
  },
  //7 팝업
  {
    url: '/popup',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  },
  //8 팝업 바텀시트
  {
    url: '/popupBottomsheet',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  },
  //9 이미지 파일 업로드 미리보기
  {
    url: '/imageFile',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  //10 input detail
  {
    url: '/inputDetail',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.7,
  },
  //11 스켈레톤 로딩
  {
    url: '/skeletonLoading',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.8,
  },
  //12 Editor(에디터)
  {
    url: '/editor',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  //13 pointermove
  {
    url: '/pointermove',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  //14 알림
  {
    url: '/notification',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  //15 탭슬라이더
  {
    url: '/tabSlider',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  //16 circularProgress
  {
    url: '/circularProgress',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  //17 countdown Timer
  {
    url: '/countdownTimer',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  //18 date time
  {
    url: '/dateTime',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  //19 Tabs
  {
    url: '/tabs',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  //20 Toggle
  {
    url: '/toggle',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  //21 stickyNavi
  {
    url: '/stickyNavi',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  //22 signin
  {
    url: '/signin',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
];

const tileSiteMaps = [
  {
    id: 1,
    title: '알림 팝업',
  },
  {
    id: 2,
    title: '컴펌 창',
  },
  {
    id: 3,
    title: '일반 켈린더',
  },
  {
    id: 4,
    title: '예약 켈린더',
  },
  {
    id: 5,
    title: '무한 스크롤',
  },
  {
    id: 6,
    title: 'Bottomsheet',
  },
  {
    id: 7,
    title: '팝업',
  },
  {
    id: 8,
    title: '팝업 바텀시트',
  },
  {
    id: 9,
    title: '이미지 파일 업로드 미리보기',
  },
  {
    id: 10,
    title: 'input Boxs',
  },
  {
    id: 11,
    title: '스켈레톤 로딩',
  },
  {
    id: 12,
    title: 'Editor(에디터)',
  },
  {
    id: 13,
    title: '마우스 move 포인트',
  },
  {
    id: 14,
    title: '알림 바텀시트',
  },
  {
    id: 15,
    title: '탭슬리이더',
  },
  {
    id: 16,
    title: 'circularProgress',
  },
  {
    id: 17,
    title: 'countdownTimer',
  },
  {
    id: 18,
    title: 'dateTime',
  },
  {
    id: 19,
    title: 'tabs',
  },
  {
    id: 20,
    title: 'toggle',
  },
  {
    id: 21,
    title: 'stickyNavi',
  },
  {
    id: 22,
    title: 'signin',
  },
];

export default function sitemap() {
  const defaultSiteMap = tileSiteMaps.map((name, index) => {
    const defaultSite = defaultSiteMaps[index];
    return {
      title: name.title,
      url: defaultSite.url,
      lastModified: defaultSite.lastModified as Date,
      changeFrequency: defaultSite.changeFrequency as string,
      priority: defaultSite.priority as number,
    };
  });
  return [...defaultSiteMap];
}
