'use client';

import React, { useCallback, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { isAxiosError } from 'axios';
import clsx from 'clsx';
import QuillEditor from 'quill';

import { customAxios } from '@/libs/customAxios';

import { EditorStyled } from './styled';

export type QuillRef = ReactQuill & { editor: QuillEditor };

export type EditorProps = {
  placeholder?: string;
  uploadUrl?: string;
  htmlStr: string;
  setHtmlStr: (v: string) => void;
};

export default function Editor({
  placeholder,
  uploadUrl,
  htmlStr: value,
  setHtmlStr: onChange,
}: EditorProps) {
  const editorRef = useRef<QuillRef>(null);

  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      if (!editorRef.current) {
        return;
      }

      const file = input.files?.[0];
      if (!file) {
        return;
      }

      console.log(file);
      const formData = new FormData();
      formData.append('imageFile', file);

      try {
        const res = await customAxios().post(uploadUrl || '/api/upload?type=notice', formData);
        const url = res.data.imageUrl;
        const editor = editorRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range?.index ?? 0, 'image', url);
      } catch (error) {
        if (isAxiosError(error) && error.response?.status === 413) {
          alert('파일 용량이 너무 큽니다.');
        }
      }
    });
  }, [editorRef]);

  return (
    <EditorStyled className={clsx('Editor')}>
      <ReactQuill
        theme="snow"
        ref={editorRef}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        modules={{
          toolbar: {
            container: [
              [{ header: [1, 2, 3, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
              ['link', 'image', 'video'],
              [{ align: [] }, { color: [] }, { background: [] }],
              ['code-block', 'blockquote'],
              ['clean'],
            ],
            handlers: {
              image: imageHandler,
            },
          },
        }}
        formats={[
          'header',
          'bold',
          'italic',
          'underline',
          'strike',
          'list',
          'indent',
          'link',
          'image',
          'video',
          'align',
          'color',
          'background',
          'code-block',
          'font',
          'blockquote',
        ]}
      />
    </EditorStyled>
  );
}
