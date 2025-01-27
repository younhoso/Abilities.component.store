'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalPortalProps = {
  children: ReactNode;
};

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

export default function ModalPortal({ children }: ModalPortalProps) {
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

  return createPortal(children, portalNode);
}
