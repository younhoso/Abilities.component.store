'use client';

import styled, { keyframes } from 'styled-components';

// keyframes를 사용하여 애니메이션 정의
const loadingAnimation = keyframes`
  100% {
    background-position: -100% 0;
  }
`;

export const SkeletonLoadingStyled = styled.div`
  background-color: #eee;
  &.avatar {
    background: linear-gradient(90deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%);
    border-radius: 50%;
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: ${loadingAnimation} 1.5s infinite;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }
  &.text {
    background: linear-gradient(90deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%);
    border-radius: 1rem;
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: ${loadingAnimation} 1.5s infinite;
    width: 100%;
    height: 12px;
    margin-bottom: 10px;
  }
  &.title {
    background: linear-gradient(90deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%);
    border-radius: 1rem;
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: ${loadingAnimation} 1.5s infinite;
    width: 50%;
    height: 20px;
    margin-bottom: 15px;
  }
  &.thumbnail {
    background: linear-gradient(90deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%);
    border-radius: 1rem;
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: ${loadingAnimation} 1.5s infinite;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }
`;
