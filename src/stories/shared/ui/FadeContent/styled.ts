'use client';

import styled from 'styled-components';

interface FadeContentProps {}

export const FadeContentStyled = styled.div<FadeContentProps>`
  position: relative;
  overflow: hidden;
  .content {
    opacity: 0;
    &.no-animate {
      opacity: 1;
    }
    &.animate {
      animation: fadeIn 0.4s linear forwards;

      &.up {
        transform: translateY(80px);
        animation-name: fadeUp;
      }

      &.down {
        transform: translateY(80px);
        animation-name: fadeDown;
      }

      &.left {
        transform: translateX(-80px);
        animation-name: fadeLeft;
      }

      &.right {
        transform: translateX(80px);
        animation-name: fadeRight;
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(80px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeDown {
    from {
      opacity: 0;
      transform: translateY(-80px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeLeft {
    from {
      opacity: 0;
      transform: translateX(-80px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeRight {
    from {
      opacity: 0;
      transform: translateX(80px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
