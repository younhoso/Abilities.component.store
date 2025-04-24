'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import ModalContents from './ModalContents';
import ModalContentsBox from './ModalContentsBox';

interface Props extends PropsWithChildren {
  isOpenModal?: boolean;
  setIsOpenModal?: (v: boolean) => void;
  children: ReactNode;
}

// 템플릿 생성 함수
const createTemplateNode = (): Element | null => {
  const template = `
    <div id="ModalRoot">
      <!-- 모달 콘텐츠가 여기에 삽입됩니다. -->
    </div>
  `;
  const parser = new DOMParser();
  const doc = parser.parseFromString(template, 'text/html');
  return doc.body.firstElementChild; // 생성된 DOM 노드를 반환
};

const BaseModalPortal = ({ isOpenModal, children }: Props) => {
  const [portalNode, setPortalNode] = useState<Element | null>(null);

  useEffect(() => {
    let node = document.querySelector('#ModalRoot');
    if (!node) {
      node = createTemplateNode(); // 템플릿을 파싱하여 DOM 노드 생성
      if (node) {
        document.body.appendChild(node);
      }
    }
    setPortalNode(node);

    return () => {
      if (node && node.parentElement === document.body) {
        document.body.removeChild(node);
      }
    };
  }, []);

  if (!portalNode) {
    return null;
  }

  if (!isOpenModal) {
    return null;
  }

  return createPortal(children, portalNode);
};

BaseModalPortal.displayName = 'Modal';

export const Modal = Object.assign(BaseModalPortal, {
  ModalContents,
  ModalContentsBox,
});

export { ModalContents, ModalContentsBox };
