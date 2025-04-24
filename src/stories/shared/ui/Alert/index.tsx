import { ReactNode } from 'react';

import Button, { ButtonItem } from '@/stories/shared/ui/Button';
import { cx } from '@/utils/cx';

import AlertContents from './AlertContents';
import { AlertStyled } from './styled';

interface Props {
  description: ReactNode;
}

const BaseAlert = ({ description }: Props) => {
  return (
    <AlertStyled>
      <AlertContents desc={description}>
        <div className={cx('buttonInner')}>
          <Button>
            <ButtonItem mode="primary">확인</ButtonItem>
          </Button>
        </div>
      </AlertContents>
    </AlertStyled>
  );
};

const Alert = Object.assign(BaseAlert, {
  AlertContents,
});

export default Alert;
