import { cx } from '@/utils/cx';

import { RoleType } from '../../types/Role';
import { RoleBadgeStyled } from './styled';

interface Props {
  role: string;
  className?: string;
}

// 역할에 맞는 색상을 설정하는 함수
const getRole = (role: string): RoleType => {
  switch (role) {
    case 'admin':
      return { icon: <span>👑</span>, label: '관리자', color: '#FF5733' }; // 관리자
    case 'guest':
      return { icon: <span>🔔</span>, label: '손님', color: '#2196F3' }; // 일일 손님
    default:
      return { icon: <span>👤</span>, label: '사용자', color: '#999999' }; // 일반 사용자;
  }
};

const RoleBadge = ({ role, className }: Props) => {
  const roleColor = getRole(role);

  return (
    <RoleBadgeStyled className={cx(className)} roleColor={roleColor}>
      {roleColor.icon}
    </RoleBadgeStyled>
  );
};

RoleBadge.displayName = 'Badge';

export default RoleBadge;
