export interface CheckBoxProps extends PropsWithChildren {
  label?: string;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  isGroupControlled?: boolean; // 그룹 상태를 관리할지 여부
  sizes?: 'sm' | 'md' | 'lg' | 'full';
  align?: 'left' | 'center' | 'right';
  color?: string;
  borderColor?: string;
  borderWidth?: string;
  backgroundColor?: string;
  onChange?: (checked: boolean) => void;
}
