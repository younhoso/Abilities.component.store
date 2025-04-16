import clsx from 'clsx';

import ModalContents from '@/components/ModalContents/ModalContents';
import ModalPortal from '@/components/ModalPortal/ModalPortal';
import { Button } from '@/stories/shared/ui/Button';

import AlertBody from './AlertBody';
import { AlertStyled } from './styled';

type AlertProps = {
  isOpenModal: boolean;
  setIsOpenModal: (v: boolean) => void;
};

const Alert = ({ isOpenModal, setIsOpenModal }: AlertProps) => {
  return (
    <AlertStyled className={clsx('Alert')}>
      {isOpenModal && (
        <ModalPortal>
          <ModalContents isShow={false} onClose={setIsOpenModal}>
            <AlertBody
              isClose={true}
              onClose={setIsOpenModal}
              title={
                <>
                  Alert창 내용 입니다.~
                  <br />
                  sdfsdfsdsdfsdf
                </>
              }
            >
              <Button mode="disabled">disabled</Button>
              <Button mode="primary">primary</Button>
            </AlertBody>
          </ModalContents>
        </ModalPortal>
      )}
    </AlertStyled>
  );
};

export default Alert;
