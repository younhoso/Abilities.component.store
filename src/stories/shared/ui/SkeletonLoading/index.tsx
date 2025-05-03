import { cx } from '@/utils/cx';

import SkeletonProfile from './SkeletonProfile';

const SkeletonLoading = () => {
  return (
    <div className={cx('SkeletonProfile')}>
      <div className="skeleton-wrapper">
        <div className="skeleton-profile">
          <div>
            <SkeletonProfile type="avatar" />
          </div>
          <div>
            <SkeletonProfile type="thumbnail" />
          </div>
          <div>
            <SkeletonProfile type="title" />
            <SkeletonProfile type="text" />
            <SkeletonProfile type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Loading = Object.assign(SkeletonLoading, { SkeletonProfile });

export { SkeletonProfile };

export default Loading;
