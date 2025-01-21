import clsx from 'clsx';

import Button from '../Button/Button';
import ButtonInner from '../Button/ButtonInner';
import ModalContents from '../ModalContents/ModalContents';
import ModalPortal from '../ModalPortal/ModalPortal';
import AlertBody from './AlertBody';
import { AlertStyled } from './styled';

type AlertProps = {
  isOpenModal: boolean;
  setOpenMoal: (v: boolean) => void;
};

export default function Alert({ isOpenModal, setOpenMoal }: AlertProps) {
  return (
    <AlertStyled className={clsx('Alert')}>
      {isOpenModal && (
        <ModalPortal>
          <ModalContents isShow={false} onClose={setOpenMoal}>
            <AlertBody
              isClose={true}
              onClose={setOpenMoal}
              title={
                <>
                  Alert창 내용 입니다.~
                  <br />
                  sdfsdfsdsdfsdf
                </>
              }
            >
              <ButtonInner>
                <Button mode="disabled" disabledBgColor="#6c757d">
                  disabled
                </Button>
                <Button mode="primary">primary</Button>
              </ButtonInner>
            </AlertBody>
          </ModalContents>
        </ModalPortal>
      )}
    </AlertStyled>
  );
}
