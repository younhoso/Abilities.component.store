import { ReactNode, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import ModalContents from '@/components/ModalContents/ModalContents';
import ModalPortal from '@/components/ModalPortal/ModalPortal';
import { useDraggable } from '@/hooks/useDraggable';
import { mobileRegex } from '@/utils/regExp';

import { ModalDraggableStyled } from './styled';

type BottomsheetProps = {
  mode?: 'basic' | 'popupBottomsheet';
  title?: ReactNode;
  barBottomsheet?: boolean;
  openModal: boolean;
  setOpenMoal: (v: boolean) => void;
  heightFull?: boolean;
  children?: ReactNode;
};

export default function Bottomsheet({
  mode = 'basic',
  title,
  barBottomsheet,
  openModal,
  setOpenMoal,
  heightFull = false,
  children,
}: BottomsheetProps) {
  const modeClasses = {
    basic: 'basic',
    popupBottomsheet: 'popupBottomsheet',
  };

  const elementBoxRef = useRef<HTMLDivElement>(null); // 요소 상자를 위한 ref를 설정합니다.
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  useDraggable(elementBoxRef, v => setOpenMoal(v), mode === 'popupBottomsheet');

  useEffect(() => {
    const userAgent = navigator.userAgent;
    setIsMobileDevice(mobileRegex.test(userAgent));
  }, []);

  return (
    <ModalDraggableStyled className={clsx('ModalDraggable')}>
      <ModalPortal>
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
                <div
                  className={clsx('draggable', modeClasses[mode], { heightFull: heightFull })}
                  ref={elementBoxRef}
                >
                  {title && <div className="headerBottomsheet">{title}</div>}
                  {barBottomsheet && <div className="barBottomsheet"></div>}
                  <div className={clsx('bodyBottomsheet')}>{children}</div>
                </div>
              </motion.div>
            </ModalContents>
          )}
        </AnimatePresence>
      </ModalPortal>
    </ModalDraggableStyled>
  );
}
