import { ReactNode } from 'react';

import { Button, ButtonItem } from '@/stories/shared/ui/Button';
import { cx } from '@/utils/cx';

import ConfirmDialogContents from './ConfirmDialogContents';
import { AlertStyled } from './styled';

interface Props {
  description: ReactNode;
}

const BaseConfirmDialog = ({ description }: Props) => {
  return (
    <AlertStyled>
      <ConfirmDialogContents desc={description}>
        <div className={cx('buttonInner')}>
          <Button>
            <ButtonItem mode="secondary">취소</ButtonItem>
            <ButtonItem mode="primary">확인</ButtonItem>
          </Button>
        </div>
      </ConfirmDialogContents>
    </AlertStyled>
  );
};

export const Alert = Object.assign(BaseConfirmDialog, {
  ConfirmDialogContents,
});
