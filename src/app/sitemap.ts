import { MetadataRoute } from 'next';

export type Category = {
  url: string;
  lastModified: Date;
  changeFrequency: string;
  priority: number;
};

export type TitleSiteMap = {
  title: string;
  url: string;
};

const siteMaps: Category[] = [
  {
    url: '/alert',
    priority: 2,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/confirm',
    priority: 1,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/daypicker',
    priority: 1,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/daypickerRange',
    priority: 0.2,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/infiniteScroll',
    priority: 0.3,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/bottomsheet',
    priority: 0.4,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/popup',
    priority: 0.5,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/popupBottomsheet',
    priority: 0.5,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/imageFile',
    priority: 0.6,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/inputDetail',
    priority: 0.7,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/skeletonLoading',
    priority: 0.8,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/editor',
    priority: 0.9,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/pointermove',
    priority: 0.9,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/notification',
    priority: 0.9,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/tabSlider',
    priority: 0.9,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/circularProgress',
    priority: 0.9,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/countdownTimer',
    priority: 0.9,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/dateTime',
    priority: 0.9,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/tabs',
    priority: 0.9,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/toggle',
    priority: 0.9,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/stickyNavi',
    priority: 0.9,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/signin',
    priority: 0.9,
    lastModified: new Date(),
    changeFrequency: '',
  },
  {
    url: '/transitionGroup',
    priority: 0.9,
    lastModified: new Date(),
    changeFrequency: '',
  },
];

const titleSite = [
  { title: '알림 팝업', url: '/alert' },
  { title: '컴펌 창', url: '/confirm' },
  { title: '일반 캘린더', url: '/daypicker' },
  { title: '무한 스크롤', url: '/infiniteScroll' },
  { title: 'BottomSheet', url: '/bottomsheet' },
  { title: '팝업', url: '/popup' },
  { title: '팝업 바텀시트', url: '/popupBottomsheet' },
  { title: '이미지 파일 업로드 미리보기', url: '/imageFile' },
  { title: 'input Boxs', url: '/inputDetail' },
  { title: '스켈레톤 로딩', url: '/skeletonLoading' },
  { title: 'Editor(에디터)', url: '/editor' },
  { title: '마우스 move 포인트', url: '/pointermove' },
  { title: '알림', url: '/notification' },
  { title: '탭 슬라이더', url: '/tabSlider' },
  { title: 'Circular Progress', url: '/circularProgress' },
  { title: 'Countdown Timer', url: '/countdownTimer' },
  { title: 'DateTime', url: '/dateTime' },
  { title: 'Tabs', url: '/tabs' },
  { title: 'Toggle', url: '/toggle' },
  { title: 'Sticky Navi', url: '/stickyNavi' },
  { title: 'Sign In', url: '/signin' },
  { title: 'Transition Group', url: '/transitionGroup' },
  { title: '', url: '' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return siteMaps.map(item => ({
    url: item.url,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: item.priority,
  }));
}

export function titleSiteMap(): TitleSiteMap[] {
  return titleSite.map(item => ({
    title: item.title,
    url: item.url,
  }));
}
