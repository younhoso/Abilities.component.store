export interface CheckBoxProps extends PropsWithChildren {
  label?: string;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  isGroupControlled?: boolean; // 그룹 상태를 관리할지 여부
  align?: 'left' | 'center' | 'right';
  onChange?: (checked: boolean) => void;
}
