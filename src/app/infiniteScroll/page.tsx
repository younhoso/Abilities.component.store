'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useRef } from 'react';

import clsx from 'clsx';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { customAxios } from '@/libs/customAxios';
import { InfiniteScrollPageStyled } from '@/styles/pageStyled/InfiniteScrollPageStyled';

export default function InfiniteScrollPage() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isIntersecting, observe, unobserve } = useIntersectionObserver({
    threshold: 0.3,
  });

  const fetchStores = async ({ pageParam = 1 }) => {
    const { data } = await customAxios().get(`/api/stores?page=${pageParam}`, {
      params: {
        limit: 10,
        page: pageParam,
      },
    });
    return data;
  };

  const {
    data: stores,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isError,
    isPending,
  } = useInfiniteQuery({
    queryKey: ['stores'],
    queryFn: fetchStores,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data?.length > 0 ? lastPage.page + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const fetchNext = useCallback(async () => {
    const res = await fetchNextPage();
    if (res.isError) {
      console.log(res.error);
    }
  }, [fetchNextPage]);

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;
    if (isIntersecting && hasNextPage) {
      timerId = setTimeout(() => {
        fetchNext();
      }, 500);
    }
    return () => clearTimeout(timerId);
  }, [fetchNext, isIntersecting, hasNextPage]);

  return (
    <InfiniteScrollPageStyled className={clsx('InfiniteScrollPage')}>
      <ul>
        <li>리스트 항목들</li>
      </ul>
      <div>
        {(isPending || hasNextPage || isFetchingNextPage) && <div>로딩중...</div>}
        <div className="w-full touch-none h-10 mb-10" ref={ref} />
      </div>
    </InfiniteScrollPageStyled>
  );
}
