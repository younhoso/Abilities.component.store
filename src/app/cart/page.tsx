'use client';

import { useEffect, useState } from 'react';

import { CartPageStyle } from '@/styles/pageStyled/CartPageStyle';

type productsType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  is_selected: boolean | undefined;
};

const products: productsType[] = [
  { id: 1, name: '반팔티', price: 15000, quantity: 1, is_selected: true },
  { id: 2, name: '긴팔티', price: 20000, quantity: 1, is_selected: true },
  { id: 3, name: '핸드폰케이스', price: 15000, quantity: 1, is_selected: false },
  { id: 4, name: '후드티', price: 30000, quantity: 1, is_selected: true },
  { id: 5, name: '바지', price: 25000, quantity: 1, is_selected: true },
];

export default function CartPage() {
  const [items, setItems] = useState(products);
  const [total, setTotal] = useState(0);

  const toggleItemSelection = (id: number) => {
    const newItems = [...items];
    newItems[id].is_selected = !newItems[id].is_selected;
    setItems(newItems);
  };

  const updateItemQuantity = (id: number, quantity: number) => {
    const newItems = items.map(item => (item.id === id ? { ...item, quantity: quantity } : item));
    setItems(newItems);
  };

  const removeItem = (id: number) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  useEffect(() => {
    const totalPrice = items
      .filter(item => item.is_selected)
      .reduce((acc, item) => acc + item.price * item.quantity, 0);

    setTotal(totalPrice);
  }, [items]);

  return (
    <CartPageStyle>
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {items.map((item, idx) => {
            return (
              <li key={item.id}>
                <div className="inner">
                  <input
                    type="checkbox"
                    checked={item.is_selected}
                    onChange={() => toggleItemSelection(idx)}
                  />
                  <p>{item.name}</p>
                  <p>{item.price}원</p>
                  <input
                    className="box"
                    type="text"
                    defaultValue={item.quantity}
                    onChange={e => updateItemQuantity(item.id, parseInt(e.target.value))}
                  />
                </div>
                <button onClick={() => removeItem(item.id)}>삭제</button>
              </li>
            );
          })}
        </ul>
        <h3>Total: {total}WON</h3>
      </div>
    </CartPageStyle>
  );
}
