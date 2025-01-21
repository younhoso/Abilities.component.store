import clsx from 'clsx';

import SkeletonLoading from './SkeletonLoading';

export default function SkeletonProfile() {
  return (
    <div className={clsx('SkeletonProfile')}>
      <div className="skeleton-wrapper">
        <div className="skeleton-profile">
          <div>
            <SkeletonLoading type="avatar" />
          </div>
          <div>
            <SkeletonLoading type="thumbnail" />
          </div>
          <div>
            <SkeletonLoading type="title" />
            <SkeletonLoading type="text" />
            <SkeletonLoading type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
