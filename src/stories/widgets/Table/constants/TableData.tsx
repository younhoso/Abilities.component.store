import { AvatarFallback, AvatarImage, AvatarInfo } from '@/stories/shared/ui/Avatar';

import profileImg from '../../../../../public/images/profile.png';
import { UserRow } from '../types/user';

type Column = Readonly<{
  label: string;
  key: keyof UserRow;
}>;

export const headersColumns: Column[] = [
  { label: '프로필', key: 'profile' },
  { label: '이메일', key: 'email' },
  { label: '전화번호', key: 'phone' },
  { label: '가입 날짜', key: 'joinedAt' },
  { label: '관리', key: 'actions' },
] as const;

export const data: UserRow[] = [
  {
    id: 1,
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner1</p>
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
    id: 2,
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner2</p>
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
    id: 3,
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner3</p>
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
    id: 4,
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner4</p>
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
    id: 5,
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner5</p>
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
    id: 6,
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner6</p>
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
    id: 7,
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner7</p>
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
    id: 8,
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner8</p>
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
    id: 9,
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner9</p>
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
    id: 10,
    checkedItem: false,
    profile: (
      <AvatarFallback justify="flex-start">
        <AvatarImage src={profileImg} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfo>
          <p>Test Steiner10</p>
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
