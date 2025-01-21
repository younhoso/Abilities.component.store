'use client';

import { useQuery } from '@tanstack/react-query';

import clsx from 'clsx';

import ContentsListCard from '@/components/ContentsListCard/ContentsListCard';
import Loading from '@/components/Loading/Loading';
import { customAxios } from '@/libs/customAxios';
import { PopupPageStyled } from '@/styles/pageStyled/PopupPageStyled';

type Photos = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export default function PopupPage() {
  const {
    data: contentsDatas,
    isPending: contentsIsLoading,
    error: contentsError,
  } = useQuery({
    queryKey: ['popuppage'],
    queryFn: async () => {
      const { data } = await customAxios().get<Photos[]>('/photos?_start=1&_limit=10');
      return {
        contents: data,
      };
    },
  });

  if (contentsIsLoading) {
    return <Loading />;
  }

  if (contentsError) {
    return <div>데이터 로딩중에 에러가 발생 했습니다. 관리자에게 문의 하세요.</div>;
  }

  return (
    <PopupPageStyled className={clsx('popup')}>
      {contentsDatas &&
        contentsDatas.contents?.map(v => (
          <li key={v.id} className="item">
            <ContentsListCard contents={v} />
          </li>
        ))}
    </PopupPageStyled>
  );
}
