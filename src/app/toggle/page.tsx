'use client';

import clsx from 'clsx';

import ToggleGroup from '@/components/Toggle/ToggleGroup';
import ToggleGroupItem from '@/components/Toggle/ToggleGroupItem';
import { ToggleGroupPageStyled } from '@/styles/pageStyled/ToggleGroupPageStyled';

export default function ToggleGroupPage() {
  return (
    <ToggleGroupPageStyled className={clsx('ToggleGroupPage')}>
      <h2>Single Selection</h2>
      <ToggleGroup type="multiple" defaultChecked="bold">
        <ToggleGroupItem label="bold">Bold</ToggleGroupItem>
        <ToggleGroupItem label="italic">Italic</ToggleGroupItem>
        <ToggleGroupItem label="underline">Underline</ToggleGroupItem>
        <ToggleGroupItem label="test">ㅅㄷㄴㅅ</ToggleGroupItem>
      </ToggleGroup>
    </ToggleGroupPageStyled>
  );
}
