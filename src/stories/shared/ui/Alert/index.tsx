import clsx from 'clsx';

import ModalContents from '@/components/ModalContents/ModalContents';
import ModalPortal from '@/components/ModalPortal/ModalPortal';
import { Button, ButtonItem } from '@/stories/shared/ui/Button';

import AlertContents from './AlertContents';
import { AlertStyled } from './styled';

interface Props {
  isOpenModal: boolean;
  setIsOpenModal: (v: boolean) => void;
}

const BaseAlert = ({ isOpenModal, setIsOpenModal }: Props) => {
  return (
    <AlertStyled className={clsx('Alert')}>
      {isOpenModal && (
        <ModalPortal>
          <ModalContents isShow={false} onClose={setIsOpenModal}>
            <AlertContents
              desc={
                <>
                  Alert창 내용 입니다.!
                  <br />
                  Alert창, Alert창
                </>
              }
            >
              <Button className="">
                <ButtonItem mode="secondary">취소</ButtonItem>
                <ButtonItem mode="primary">확인</ButtonItem>
              </Button>
            </AlertContents>
          </ModalContents>
        </ModalPortal>
      )}
    </AlertStyled>
  );
};

export const Alert = Object.assign(BaseAlert, {
  AlertContents,
});
