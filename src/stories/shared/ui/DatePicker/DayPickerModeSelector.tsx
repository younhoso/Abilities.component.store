'use client';

interface Props {
  value?: 'day' | 'week' | 'month';
  onChange: (mode: 'day' | 'week' | 'month') => void;
}

export const DayPickerModeSelector = ({ value = 'day', onChange }: Props) => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {['day', 'week', 'month'].map(mode => (
        <button
          key={mode}
          onClick={() => onChange(mode as 'day' | 'week' | 'month')}
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            backgroundColor: value === mode ? '#333' : '#eee',
            color: value === mode ? '#fff' : '#000',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {mode === 'day' ? '일' : mode === 'week' ? '주' : '월'}
        </button>
      ))}
    </div>
  );
};

export default DayPickerModeSelector;
