import BellIcon from '../../../../public/icons/bell.svg';
import CloseIcon from '../../../../public/icons/close.svg';
import CrownIcon from '../../../../public/icons/crown.svg';
import LeftIcon from '../../../../public/icons/leftIcon.svg';
import PencilIcon from '../../../../public/icons/pencil.svg';
import RightIcon from '../../../../public/icons/rightIcon.svg';
import SignOutIcon from '../../../../public/icons/signOut.svg';
import DownIcon from '../../../../public/icons/smallCaretDown.svg';
import UserIcon from '../../../../public/icons/user.svg';
import type { IconData } from '../../shared/types/icon';

export const ICONS_DATAS = {
  UserIcon: { icon: <UserIcon />, label: '<UserIcon />' },
  SignOutIcon: { icon: <SignOutIcon />, label: '<SignOutIcon />' },
  BellIcon: { icon: <BellIcon />, label: '<BellIcon />' },
  CloseIcon: { icon: <CloseIcon />, label: '<CloseIcon />' },
  PencilIcon: { icon: <PencilIcon />, label: '<PencilIcon />' },
  DownIcon: { icon: <DownIcon />, label: '<DownIcon />' },
  LeftIcon: { icon: <LeftIcon />, label: '<LeftIcon />' },
  RightIcon: { icon: <RightIcon />, label: '<RightIcon />' },
  crownIcon: { icon: <CrownIcon />, label: '<CrownIcon />' },
} as { [key: string]: IconData };

export const ICONS_DATAS_ARRAY = Object.values(ICONS_DATAS).map(({ icon, label }) => ({
  icon,
  label,
}));
