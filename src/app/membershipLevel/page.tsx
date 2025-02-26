'use client';

import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { MembershipBenefit } from '../api/membership/route';

type User = {
  id: string;
  name: string;
  lastMonthPurchase: number;
  membershipTier: string;
  benefits: MembershipBenefit;
};

export default function MembershipLevelPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/membership')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className={clsx('membershipLevel')}>
      <h1>회원 등급 리스트</h1>
      <ul>
        {users.map(user => (
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
