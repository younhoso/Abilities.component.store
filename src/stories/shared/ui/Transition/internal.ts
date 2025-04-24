// 튜플인지 확인하는 타입 가드
export const isTuple = (value: unknown): value is [number, number] => {
  return Array.isArray(value) && value.length === 2;
};
