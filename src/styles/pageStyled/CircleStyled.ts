'use client';

import styled from 'styled-components';

import { CircleProgressProps } from '@/components/CircleProgress/CircleProgress';

type ValueProps = {
  color: string;
} & Pick<CircleProgressProps, 'isSemi'>;

export const CircleStyled = styled.div<{ value: ValueProps }>`
  div {
    height: 50vh;
    max-width: 1160px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .progressText {
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      transform: ${({ value }) => (value.isSemi ? `translate(-50%, 0)` : `translate(-50%, -50%)`)};

      .text {
        display: inline-block;
        width: auto;
        font-size: 24px;
        font-weight: 700;
        color: ${({ value }) => (value.color ? `${value.color}` : '#000')};
        background-color: transparent;
      }
    }
  }
`;
