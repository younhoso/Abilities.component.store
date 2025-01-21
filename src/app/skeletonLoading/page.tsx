'use client';

import { useQuery } from '@tanstack/react-query';

import clsx from 'clsx';

import SkeletonProfile from '@/components/SkeletonLoading/SkeletonProfile';
import { customAxios } from '@/libs/customAxios';
import { SkeletonLoadingPageStyled } from '@/styles/pageStyled/SkeletonLoadingPageStyled';

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export default function SkeletonLoadingPage() {
  const {
    data: profileDatas,
    isPending: profileIsLoading,
    error: profileError,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data } = await customAxios().get<User[]>('/users?_start=1&_limit=10');
      return {
        profile: data,
      };
    },
  });

  if (profileIsLoading) {
    return <SkeletonProfile />;
  }

  return (
    <SkeletonLoadingPageStyled className={clsx('page')}>
      <h2>User</h2>
      {profileDatas &&
        profileDatas.profile.map(userInfo => (
          <div className="profile" key={userInfo.id}>
            <h3>{userInfo.username}</h3>
            <p>{userInfo.email}</p>
            <a href={userInfo.website}>{userInfo.website}</a>
          </div>
        ))}
    </SkeletonLoadingPageStyled>
  );
}
