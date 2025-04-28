import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import { cx } from '@/utils/cx';

import Button, { ButtonItem } from '../Button';
import DayPickerModeSelector from './DayPickerModeSelector';
import { DayPickerNavStyled } from './styled';

interface Props extends PropsWithChildren {
  today: Date;
  handlePrevMonth?: () => void;
  handleNextMonth?: () => void;
}

const DayPickerNav = ({ today, handlePrevMonth, handleNextMonth }: Props) => {
  return (
    <DayPickerNavStyled className={cx('')}>
      <div>{format(today, 'yyyy년 M월', { locale: ko })}</div>
      <div>
        <DayPickerModeSelector value="day" onChange={() => {}} />
      </div>
      <div>
        <Button>
          <ButtonItem mode="secondary" size="sm" onClick={handlePrevMonth}>
            이전
          </ButtonItem>
          <ButtonItem mode="secondary" size="sm" onClick={handleNextMonth}>
            다음
          </ButtonItem>
        </Button>
      </div>
    </DayPickerNavStyled>
  );
};

export default DayPickerNav;
