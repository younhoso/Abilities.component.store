import { MetadataRoute } from 'next';

import { title } from 'process';

export interface Category {
  title: string;
  url: string;
  lastModified: Date;
  changeFrequency: string;
  priority: number;
}

const defaultSiteMaps: MetadataRoute.Sitemap = [
  //경고 창
  {
    url: '/alert',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
  //컴펌 창
  {
    url: '/confirm',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
  //일반 켈린더
  {
    url: '/daypicker',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
  // 예약 켈린더
  {
    url: '/daypickerRange',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.2,
  },
  // 무한 스크롤
  {
    url: '/infiniteScroll',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  // 팝업 스와이퍼 이벤트
  {
    url: '/bottomsheet',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.4,
  },
  // 팝업
  {
    url: '/popup',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  },
  // 이미지 파일 업로드 미리보기
  {
    url: '/imageFile',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  // input detail
  {
    url: '/inputDetail',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.7,
  },
  // 스켈레톤 로딩
  {
    url: '/skeletonLoading',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.8,
  },
  // Editor(에디터)
  {
    url: '/editor',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  // Editor(에디터)
  {
    url: '/pointermove',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  // 알림
  {
    url: '/notification',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  // 탭슬라이더
  {
    url: '/tabSlider',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  // circularProgress
  {
    url: '/circularProgress',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  // date time
  {
    url: '/dateTime',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  // Tabs
  {
    url: '/tabs',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  // Toggle
  {
    url: '/toggle',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  // stickyNavi
  {
    url: '/stickyNavi',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
];

const tileSiteMaps = [
  {
    title: '경고 창',
  },
  {
    title: '컴펌 창',
  },
  {
    title: '일반 켈린더',
  },
  {
    title: '예약 켈린더',
  },
  {
    title: '무한 스크롤',
  },
  {
    title: 'Bottomsheet',
  },
  {
    title: '팝업',
  },
  {
    title: '이미지 파일 업로드 미리보기',
  },
  {
    title: 'input Boxs',
  },
  {
    title: '스켈레톤 로딩',
  },
  {
    title: 'Editor(에디터)',
  },
  {
    title: '마우스 move 포인트',
  },
  {
    title: '알림',
  },
  {
    title: '탭슬리이더',
  },
  {
    title: 'circularProgress',
  },
  {
    title: 'dateTime',
  },
  {
    title: 'tabs',
  },
  {
    title: 'toggle',
  },
  {
    title: 'stickyNavi',
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
