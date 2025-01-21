'use client';

import { useState } from 'react';

import dynamic from 'next/dynamic';

import clsx from 'clsx';

import { EditorPageStyled } from '@/styles/pageStyled/EditorPageStyled';

const Editor = dynamic(() => import('@/components/Editor/Editor'), { ssr: false });

type EditorPageState = {
  title: string;
  htmlStr: string;
  bodyHtml: string;
};

export default function EditorPage() {
  const [selectedValue, setSelectedValue] = useState<EditorPageState>({
    title: '',
    htmlStr: '',
    bodyHtml: '',
  });

  const handleValueChange = <T extends EditorPageState, K extends keyof T>(key: K, value: T[K]) => {
    setSelectedValue(prevSelectedValue => {
      return {
        ...prevSelectedValue,
        [key]: value,
      };
    });
  };

  return (
    <EditorPageStyled className={clsx('EditorPage')}>
      <Editor
        uploadUrl={`/api/upload?type=notice`}
        placeholder={'텍스트를 입력하세요!'}
        htmlStr={selectedValue.bodyHtml}
        setHtmlStr={htmlStr => handleValueChange('bodyHtml', htmlStr)}
      />
    </EditorPageStyled>
  );
}
