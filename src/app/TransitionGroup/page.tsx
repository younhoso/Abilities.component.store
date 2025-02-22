'use client';

import { useState } from 'react';

import clsx from 'clsx';

import TransitionGroup from '@/components/TransitionGroup';
import { TransitionGroupPageStyled } from '@/styles/pageStyled/TransitionGroupPageStyled';

export default function TransitionGroupPage() {
  const [items, setItems] = useState([
    { id: 1, title: 'title', text: 'Item 1' },
    { id: 2, title: 'title', text: 'Item 2' },
    { id: 3, title: 'title', text: 'Item 3' },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now(), title: `title ${items.length + 1}`, text: `Item ${items.length + 1}` },
    ]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <TransitionGroupPageStyled className={clsx('TransitionGroupPage')}>
      <h2>TransitionGroup 컴포넌트 사용 예시</h2>
      <button onClick={addItem}>Add Item</button>
      <TransitionGroup x={50} y={0} opacity={0} duration={0.5}>
        {items.map(item => (
          <div key={item.id} onClick={() => removeItem(item.id)} className="inner">
            <p className="title">{item.title}</p>
            <p className="text">{item.text}</p>
          </div>
        ))}
      </TransitionGroup>
    </TransitionGroupPageStyled>
  );
}
