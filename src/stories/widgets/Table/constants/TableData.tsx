import { AvatarFallback, AvatarImage, AvatarInfo } from '@/stories/shared/ui/Avatar';

import profileImg from '../../../../../public/images/profile.png';
import { UserRow } from '../types/user';

export const headers = [
  { label: '프로필', key: 'profile' },
  { label: '이메일', key: 'email' },
  { label: '전화번호', key: 'phone' },
  { label: '가입 날짜', key: 'joinedAt' },
  { label: '관리', key: 'actions' },
] as const;

export const data: UserRow[] = [
  {
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner</p>
          <p>Avatar@avatar.com</p>
        </AvatarInfo>
      </AvatarFallback>
    ),
    email: 'hong@example.com',
    phone: '010-1234-5678',
    joinedAt: '2024-01-01',
    actions: (
      <>
        <button>수정</button> | <button>삭제</button>
      </>
    ),
  },
  {
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner</p>
          <p>Avatar@avatar.com</p>
        </AvatarInfo>
      </AvatarFallback>
    ),
    email: 'hong@example.com',
    phone: '010-1234-5678',
    joinedAt: '2024-01-01',
    actions: (
      <>
        <button>수정</button> | <button>삭제</button>
      </>
    ),
  },
  {
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner</p>
          <p>Avatar@avatar.com</p>
        </AvatarInfo>
      </AvatarFallback>
    ),
    email: 'hong@example.com',
    phone: '010-1234-5678',
    joinedAt: '2024-01-01',
    actions: (
      <>
        <button>수정</button> | <button>삭제</button>
      </>
    ),
  },
  {
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner</p>
          <p>Avatar@avatar.com</p>
        </AvatarInfo>
      </AvatarFallback>
    ),
    email: 'hong@example.com',
    phone: '010-1234-5678',
    joinedAt: '2024-01-01',
    actions: (
      <>
        <button>수정</button> | <button>삭제</button>
      </>
    ),
  },
  {
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner</p>
          <p>Avatar@avatar.com</p>
        </AvatarInfo>
      </AvatarFallback>
    ),
    email: 'hong@example.com',
    phone: '010-1234-5678',
    joinedAt: '2024-01-01',
    actions: (
      <>
        <button>수정</button> | <button>삭제</button>
      </>
    ),
  },
  {
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner</p>
          <p>Avatar@avatar.com</p>
        </AvatarInfo>
      </AvatarFallback>
    ),
    email: 'hong@example.com',
    phone: '010-1234-5678',
    joinedAt: '2024-01-01',
    actions: (
      <>
        <button>수정</button> | <button>삭제</button>
      </>
    ),
  },
  {
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner</p>
          <p>Avatar@avatar.com</p>
        </AvatarInfo>
      </AvatarFallback>
    ),
    email: 'hong@example.com',
    phone: '010-1234-5678',
    joinedAt: '2024-01-01',
    actions: (
      <>
        <button>수정</button> | <button>삭제</button>
      </>
    ),
  },
  {
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner</p>
          <p>Avatar@avatar.com</p>
        </AvatarInfo>
      </AvatarFallback>
    ),
    email: 'hong@example.com',
    phone: '010-1234-5678',
    joinedAt: '2024-01-01',
    actions: (
      <>
        <button>수정</button> | <button>삭제</button>
      </>
    ),
  },
  {
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner</p>
          <p>Avatar@avatar.com</p>
        </AvatarInfo>
      </AvatarFallback>
    ),
    email: 'hong@example.com',
    phone: '010-1234-5678',
    joinedAt: '2024-01-01',
    actions: (
      <>
        <button>수정</button> | <button>삭제</button>
      </>
    ),
  },
  {
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner</p>
          <p>Avatar@avatar.com</p>
        </AvatarInfo>
      </AvatarFallback>
    ),
    email: 'hong@example.com',
    phone: '010-1234-5678',
    joinedAt: '2024-01-01',
    actions: (
      <>
        <button>수정</button> | <button>삭제</button>
      </>
    ),
  },
];
