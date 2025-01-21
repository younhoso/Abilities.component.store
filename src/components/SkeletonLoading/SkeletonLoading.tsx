import clsx from 'clsx';

import { SkeletonLoadingStyled } from './SkeletonLoadingStyled';

type SkeletonLoadingProps = {
  type: string;
};

export default function SkeletonLoading({ type }: SkeletonLoadingProps) {
  return (
    <SkeletonLoadingStyled className={clsx(`skeletonLoading ${type}`)}></SkeletonLoadingStyled>
  );
}
