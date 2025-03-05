'use client';

import { useQuery } from '@tanstack/react-query';

import clsx from 'clsx';

import SkeletonProfile from '@/components/SkeletonLoading/SkeletonProfile';
import { customAxios } from '@/libs/customAxios';

import { MembershipBenefit } from '../api/membership/route';

type User = {
  id: string;
  name: string;
  lastMonthPurchase: number;
  membershipTier: string;
  benefits: MembershipBenefit;
};

export default function MembershipLevelPage() {
  const {
    data: membershipDatas,
    isPending: membershipLoading,
    error: membershipError,
  } = useQuery({
    queryKey: ['membershipLevel'],
    queryFn: async () => {
      const { data } = await customAxios().get<User[]>('/api/membership');
      return {
        membership: data,
      };
    },
  });

  if (membershipLoading) {
    return <SkeletonProfile />;
  }

  return (
    <div className={clsx('membershipLevel')}>
      <h2>회원 등급 리스트 조회</h2>
      <p>
        회원들 정보를 조회해서 사용한 지난달 액수를 기준으로 welcome, 치빡이, VIP, VVIP
        <br />
        4등급 기준으로 나눠서 현재 등급을 보여주는 로직
      </p>
      <br />

      <ul>
        {membershipDatas &&
          membershipDatas.membership.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.membershipTier} (₩
              {user.lastMonthPurchase.toLocaleString()})<br />
              할인율: {user.benefits.discountRate}%<br />
              무료 배송: {user.benefits.freeShipping ? '✅' : '❌'}
              <br />
              우선 상담: {user.benefits.prioritySupport ? '✅' : '❌'}
            </li>
          ))}
      </ul>
    </div>
  );
}
