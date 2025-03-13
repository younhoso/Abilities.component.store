'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

import clsx from 'clsx';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { customAxios } from '@/libs/customAxios';
import { InfiniteScrollPageStyled } from '@/styles/pageStyled/InfiniteScrollPageStyled';

export default function InfiniteScrollPage() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isIntersecting, observe } = useIntersectionObserver({
    threshold: 0.3,
  });

  const fetchItems = async ({ pageParam = 1 }) => {
    const { data } = await customAxios().get(`/posts`, {
      params: {
        _limit: 10,
        _page: pageParam,
      },
    });
    return data;
  };

  const {
    data: stores,
    isFetching,
    isError,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['fetchItems'],
    queryFn: fetchItems,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length > 0 ? pages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });

  useEffect(() => {
    if (ref.current) {
      observe(ref.current);
    }
  }, [observe]);

  useEffect(() => {
    if (isIntersecting) fetchNextPage();
  }, [isIntersecting, fetchNextPage]);

  return (
    <InfiniteScrollPageStyled className={clsx('infiniteScrollPage')}>
      <ul>
        {stores?.pages
          .flatMap(page => page)
          .map(item => {
            return <li key={item.id}>{item.title}</li>;
          })}
      </ul>
      <div>
        {isFetching && <div>데이터를 로딩 중...</div>}
        {isError && <div>데이터를 가져오는 데 실패했습니다.</div>}
        <div className="infiniteScrolRef" ref={ref} />
      </div>
    </InfiniteScrollPageStyled>
  );
}
