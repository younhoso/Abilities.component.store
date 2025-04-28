import { ReactNode } from 'react';

import Button, { ButtonItem } from '@/stories/shared/ui/Button';
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
            <ButtonItem size="full" mode="secondary">
              취소
            </ButtonItem>
            <ButtonItem size="full" mode="primary">
              확인
            </ButtonItem>
          </Button>
        </div>
      </ConfirmDialogContents>
    </AlertStyled>
  );
};

const ConfirmDialog = Object.assign(BaseConfirmDialog, {
  ConfirmDialogContents,
});

export default ConfirmDialog;
