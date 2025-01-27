/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useState } from 'react';

type DragState = {
  isDragging: boolean;
  startPosition: { x: number; y: number } | null;
  currentPosition: { x: number; y: number } | null;
};

const initialDragState: DragState = {
  isDragging: false,
  startPosition: null,
  currentPosition: null,
};

export const useDraggable = (
  target: RefObject<HTMLElement>,
  elementBox: RefObject<HTMLElement>,
  setOpenModal: (v: boolean) => void,
  isDraggable = true,
) => {
  const [dragState, setDragState] = useState<DragState>(initialDragState);

  const touchStart = (e: TouchEvent) => {
    setDragState({
      isDragging: true,
      startPosition: { x: e.touches[0].clientX, y: e.touches[0].clientY },
      currentPosition: dragState.currentPosition,
    });
  };

  const touchMove = (e: TouchEvent) => {
    if (!dragState.isDragging) return;
    const currentY = e.touches[0].clientY;
    const startY = dragState.startPosition?.y || 0;
    const deltaY = currentY - startY;

    if (deltaY > 0) {
      // 아래로 이동할 때만 실행
      setDragState({
        ...dragState,
        currentPosition: { x: e.touches[0].clientX, y: e.touches[0].clientY },
      });

      if (dragState.isDragging && dragState.startPosition && dragState.currentPosition) {
        if (elementBox.current) {
          elementBox.current.style.transition = '0.15s';
          elementBox.current.style.transform = `translateY(${Math.floor(deltaY)}%)`;
        }
      }
    }
  };

  const touchEnd = () => {
    const { startPosition, currentPosition } = dragState;
    if (startPosition && currentPosition) {
      const deltaY = currentPosition?.y - startPosition.y;
      const shouldMoveElement = Math.floor(deltaY) > 100; //touch Move 범위가 100 이상일때

      elementBox.current &&
        (elementBox.current.style.transform = `translateY(${shouldMoveElement ? '100%' : `${0}px`})`);

      if (shouldMoveElement) {
        setOpenModal(false);
      }
    }

    setDragState(initialDragState);
  };

  useEffect(() => {
    if (isDraggable) return; // 드래그 비활성화

    const element = target.current;
    if (element) {
      element.addEventListener('touchstart', touchStart);
      element.addEventListener('touchmove', touchMove);
      element.addEventListener('touchend', touchEnd);
      document.body.style.overflow = 'hidden'; // overflow 스타일 추가
      return () => {
        element.removeEventListener('touchstart', touchStart);
        element.removeEventListener('touchmove', touchMove);
        element.removeEventListener('touchend', touchEnd);
        document.body.style.overflow = '';
      };
    }
  }, [target, touchStart, touchMove, touchEnd]);

  return { ...dragState, setDragState };
};
