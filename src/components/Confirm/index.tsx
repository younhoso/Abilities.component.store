import { ReactNode } from 'react';

import clsx from 'clsx';

import Button from '../Button/Button';
import ButtonInner from '../Button/ButtonInner';
import ModalContents from '../ModalContents/ModalContents';
import ModalPortal from '../ModalPortal/ModalPortal';
import AlertBody from './ConfirmBody';
import ConfirmBody from './ConfirmBody';
import { ConfirmStyled } from './styled';

type AlertProps = {
  isOpenModal: boolean;
  setOpenMoal: (v: boolean) => void;
};

export default function Confirm({ isOpenModal, setOpenMoal }: AlertProps) {
  return (
    <ConfirmStyled className={clsx('Confirm')}>
      {isOpenModal && (
        <ModalPortal>
          <ModalContents isShow={false} onClose={setOpenMoal}>
            <ConfirmBody isClose={true}>
              <div>
                confirm창 내용 입니다.~
                <br />
                sdfsdfsdsdfsdf
                <br />
                sdfsdf
              </div>
              <ButtonInner>
                <Button mode="secondary">secondary</Button>
                <Button mode="primary">primary</Button>
              </ButtonInner>
            </ConfirmBody>
          </ModalContents>
        </ModalPortal>
      )}
    </ConfirmStyled>
  );
}
