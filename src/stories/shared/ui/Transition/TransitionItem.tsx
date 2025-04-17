import { cx } from '@/utils/cx';

import { TransitionItemStyled } from './styled';

interface Props {}

const items = ['A', 'B', 'C'];

const TransitionItem = ({}: Props) => {
  return (
    <TransitionItemStyled className={cx('')}>
      {items.map((text, idx) => (
        <div
          key={idx}
          style={{
            background: '#f0f0f0',
            marginBottom: '12px',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '16px',
          }}
        >
          항목 {text}
        </div>
      ))}
    </TransitionItemStyled>
  );
};

export default TransitionItem;
