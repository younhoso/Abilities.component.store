'use client';

import { useCallback, useState } from 'react';

import clsx from 'clsx';

import InputField from '@/components/InputField/InputField';
import Radio from '@/components/RadioGroup/Radio';
import RadioGroup from '@/components/RadioGroup/RadioGroup';
import { InputDetailPageStyled } from '@/styles/pageStyled/InputDetailPageStyled';

export type InputDetailPageState = {
  nameValue: string;
  emailValue: string;
  contact: string;
};

export default function InputDetailPage() {
  const [value, setValue] = useState<InputDetailPageState>({
    nameValue: '',
    emailValue: '',
    contact: 'Email',
  });

  const handleValueChange = <T extends InputDetailPageState, K extends keyof T>(
    key: K,
    value: T[K],
  ) => {
    setValue(prevSelectedValue => ({
      ...prevSelectedValue,
      [key]: value,
    }));
  };

  // 각각의 필드에 고정된 key와 함께 콜백 함수 정의
  const handleNameChange = useCallback((v: string) => {
    handleValueChange('nameValue', v); // key는 'nameValue'로 고정
  }, []);

  const handleEmailChange = useCallback((v: string) => {
    handleValueChange('emailValue', v); // key는 'emailValue'로 고정
  }, []);

  const handleContactChange = useCallback((v: string) => {
    handleValueChange('contact', v); // key는 'contact'로 고정
  }, []);

  return (
    <InputDetailPageStyled className={clsx('page')}>
      <InputField
        label="이름"
        inputProps={{ placeholder: '이름을 입력하세요' }}
        onChange={handleNameChange}
      />
      <InputField
        label="이메일"
        inputProps={{ type: 'email', placeholder: '이메일을 입력하세요' }}
        onChange={handleEmailChange}
      />

      <RadioGroup label="연락 방법" value={value.contact} onChange={handleContactChange}>
        <Radio value={'Email'}>이메일</Radio>
        <Radio value={'Phone'}>전화</Radio>
        <Radio value={'Fax'}>팩스</Radio>
      </RadioGroup>
      <p>{value.contact}</p>
    </InputDetailPageStyled>
  );
}
