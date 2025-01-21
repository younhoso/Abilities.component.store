'use client';

import React from 'react';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import Tabs from '@/components/Tabs/Tabs';
import useTabs from '@/hooks/useTabs';

export type TabItem = {
  types: 'education' | 'family';
  label: string;
};

// Tabs 컨텐츠 영역
const initialTabs: TabItem[] = [
  { types: 'education', label: '교육목자' },
  { types: 'family', label: '아이들과 가정' },
];

const prayerTopicData = {
  data: [
    {
      id: 1,
      documentId: 'c3r3ssxw1uqgnp56zagn3jjk',
      types: 'education',
      title: '2025 수험생 명단',
      desc: '김선민, 도승범, 문정화, 김선민, 도승범, 문정화, 김선민, 김선민, 도승범, 문정화, 김선민, 도승범, 문정화.',
      subTitle: '교육목자',
      createdAt: '2024-12-16T16:25:34.366Z',
      updatedAt: '2024-12-18T12:15:38.066Z',
      publishedAt: null,
    },
    {
      id: 3,
      documentId: 'm470u1cz50s7fyrvdkwj2eqo',
      types: 'family',
      title: '2025 수험생 명단',
      desc: '김선민, 도승범, 문정화, 김선민, 도승범, 문정화, 김선민, 김선민, 도승범, 문정화, 김선민, 도승범, 문정화',
      subTitle: '아이들과 가정',
      createdAt: '2024-12-16T16:26:08.115Z',
      updatedAt: '2024-12-18T12:15:32.339Z',
      publishedAt: null,
    },
    {
      id: 5,
      documentId: 'dphtdkgihgv0hlfft7axx9zh',
      types: 'family',
      title: '영아1부 김민하',
      desc: '열상(6바늘)치료, 실밥 뽑은 후 회복 중',
      subTitle: '아이들과 가정',
      createdAt: '2024-12-16T16:30:44.333Z',
      updatedAt: '2024-12-18T12:20:33.222Z',
      publishedAt: null,
    },
    {
      id: 7,
      documentId: 'ip1b6bmch7yn37sc8vwwpx1d',
      types: 'education',
      title: '유치1부 정종순 교육목자',
      desc: '남편 김학년 집사님, 방광암 방사선 치료 추가 진행',
      subTitle: '교육목자',
      createdAt: '2024-12-16T17:42:21.274Z',
      updatedAt: '2024-12-18T12:15:21.290Z',
      publishedAt: null,
    },
    {
      id: 13,
      documentId: 'id1tr56zz9zr20kfem4znjo0',
      types: 'education',
      title: '유치1부 박지영 교육목자',
      desc: '동생(박현정) 유방암 3기, 항암치료 및 방사선 치료 진행',
      subTitle: '교육목자',
      createdAt: '2024-12-18T12:09:34.286Z',
      updatedAt: '2024-12-18T12:15:14.062Z',
      publishedAt: null,
    },
  ],
};

export default function TabPage() {
  const { activeKey, switchTab } = useTabs(initialTabs[0]);

  // 선택된 탭에 해당하는 데이터를 필터링
  const filteredPrayerTopics = prayerTopicData?.data.filter(
    prayer => prayer.types === activeKey.types,
  );

  return (
    <Tabs>
      {/* Tabs Header */}
      {initialTabs.map(item => {
        return (
          <button
            key={item.label}
            className={clsx(item === activeKey ? 'isActive' : null, 'name')}
            onClick={() => switchTab(item)}
          >
            {item.label}
            {item === activeKey ? <motion.div className="underBg" layoutId="underBg" /> : null}
          </button>
        );
      })}
      {/* // Tabs Header */}

      <ul>
        {filteredPrayerTopics?.map(prayer => (
          <li key={prayer.id}>
            <p className="subTitle">{prayer.subTitle}</p>
            <h4 className="title">{prayer.title}</h4>
            <p className="desc">{prayer.desc}</p>
          </li>
        ))}
      </ul>
    </Tabs>
  );
}
