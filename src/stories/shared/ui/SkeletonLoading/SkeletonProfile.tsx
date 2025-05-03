import { cx } from '@/utils/cx';

import { SkeletonLoadingStyled } from './SkeletonLoadingStyled';

interface Props {
  type: 'title' | 'subtitle' | 'text' | 'avatar' | 'thumbnail';
}

export default function SkeletonProfile({ type }: Props) {
  return <SkeletonLoadingStyled className={cx(type)} />;
}
