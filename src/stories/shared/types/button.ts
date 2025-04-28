export const BUTTON_SIZE = {
  sm: 16,
  md: 24,
  lg: 32,
  full: 100,
} as const;

export type ButtonSize = keyof typeof BUTTON_SIZE;

export interface ButtonData {
  size?: ButtonSize;
}
