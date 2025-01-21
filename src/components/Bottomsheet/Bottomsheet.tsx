import { ReactNode, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import ModalContents from '@/components/ModalContents/ModalContents';
import ModalPortal from '@/components/ModalPortal/ModalPortal';
import { useDraggable } from '@/hooks/useDraggable';
import { mobileRegex } from '@/utils/regExp';

import { ModalDraggableStyled } from './styled';

type BottomsheetProps = {
  title?: ReactNode;
  barBottomsheet?: boolean;
  openModal: boolean;
  setOpenMoal: (v: boolean) => void;
  heightFull?: boolean;
};

export default function Bottomsheet({
  title,
  barBottomsheet,
  openModal,
  setOpenMoal,
  heightFull = false,
}: BottomsheetProps) {
  const elementBoxRef = useRef<HTMLDivElement>(null); // 요소 상자를 위한 ref를 설정합니다.
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    setIsMobileDevice(mobileRegex.test(userAgent));
  }, []);

  // useDraggable 훅을 사용하여 드래그 기능을 추가합니다.
  useDraggable(elementBoxRef, elementBoxRef, v => setOpenMoal(v));

  return (
    <ModalDraggableStyled className={clsx('ModalDraggable')}>
      <ModalPortal id="GeneralLayoutContainer">
        <AnimatePresence>
          {openModal && (
            <ModalContents isShow={false} onClose={() => setOpenMoal(false)}>
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, y: '100%' }}
                className={clsx('motion', isMobileDevice && 'isMobileDevice')}
              >
                <div className={clsx('draggable', { heightFull: heightFull })} ref={elementBoxRef}>
                  {title && <div className="headerBottomsheet">{title}</div>}
                  {barBottomsheet && <div className="barBottomsheet"></div>}
                  <div className="bodyBottomsheet" ref={elementBoxRef}>
                    <ul>
                      <li>Share</li>
                      <li>Get link</li>
                      <li>Edit name</li>
                      <li>Delete collection</li>
                      <li>Move</li>
                      <li>Star</li>
                      <li>Rename</li>
                      <li>Remove</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </ModalContents>
          )}
        </AnimatePresence>
      </ModalPortal>
    </ModalDraggableStyled>
  );
}
