import { useQuery } from '@tanstack/react-query';

import Image from 'next/image';

import clsx from 'clsx';

import { customAxios } from '@/libs/customAxios';

import ImageResize from '../Image/Image';
import Loading from '../Loading/Loading';
import { ContentsDetailStyled } from './styled';

type Photos = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type Contents = {
  contents: Photos;
};

export default function ContentsDetail({ contents }: Contents) {
  const { id } = contents;
  const {
    data: contentsData,
    isPending: contentIsLoading,
    error: contentError,
  } = useQuery({
    queryKey: ['contentsdetail'],
    queryFn: async () => {
      const { data } = await customAxios().get<Photos>(`/photos/${id}`);
      return {
        content: data,
      };
    },
  });

  if (contentIsLoading) {
    return <Loading />;
  }

  if (contentError) {
    return <div>데이터 로딩중에 에러가 발생 했습니다. 관리자에게 문의 하세요.</div>;
  }

  return (
    <ContentsDetailStyled className={clsx('ContentsDetail')}>
      <div>
        {contentsData && (
          <>
            <ImageResize
              width={600}
              height={'auto'}
              src={contentsData?.content.thumbnailUrl}
              alt={contentsData?.content.title}
            />
            <p>{contentsData?.content.id}</p>
          </>
        )}
      </div>
    </ContentsDetailStyled>
  );
}
