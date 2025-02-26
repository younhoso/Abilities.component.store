import { NextResponse } from 'next/server';

type MembershipTier = 'welcome' | '치빡이' | 'VIP' | 'VVIP';
export type MembershipBenefit = {
  // 등급별 혜택 기준
  discountRate: number; // 할인율 (%)
  freeShipping: boolean; // 무료 배송 여부
  prioritySupport: boolean; // 우선 상담 여부
};

type MembershipTierRule = {
  name: MembershipTier;
  minAmount: number;
  benefits: MembershipBenefit;
};

const membershipTiers: MembershipTierRule[] = [
  // 등급 및, 등급별 혜택 기준 객체로 관리
  {
    name: 'VVIP',
    minAmount: 1000000,
    benefits: { discountRate: 15, freeShipping: true, prioritySupport: true },
  },
  {
    name: 'VIP',
    minAmount: 500000,
    benefits: { discountRate: 10, freeShipping: true, prioritySupport: false },
  },
  {
    name: '치빡이',
    minAmount: 100000,
    benefits: { discountRate: 5, freeShipping: false, prioritySupport: false },
  },
  {
    name: 'welcome',
    minAmount: 0,
    benefits: { discountRate: 0, freeShipping: false, prioritySupport: false },
  },
];

const users = [
  //예제: 유저 더미데이터
  { id: '1', name: '홍길동', lastMonthPurchase: 1200000 },
  { id: '2', name: '김치빡', lastMonthPurchase: 300000 },
  { id: '3', name: '이순신', lastMonthPurchase: 800000 },
  { id: '4', name: '나미', lastMonthPurchase: 40000 },
];

const getMembershipTier = (purchaseAmount: number): MembershipTierRule => {
  return membershipTiers.find(tier => purchaseAmount >= tier.minAmount) || membershipTiers.at(-1)!;
};

export async function GET() {
  //   const users = await getUsers(); // 예제: DB에서 유저 목록 가져오기

  const updatedUsers = users.map(user => {
    const tier = getMembershipTier(user.lastMonthPurchase);

    return {
      ...user,
      membershipTier: tier.name,
      benefits: tier.benefits,
    };
  });

  return NextResponse.json(updatedUsers);
}
