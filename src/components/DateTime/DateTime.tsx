import React from 'react';

import clsx from 'clsx';

type DateProps = {
  children: string;
  format?: string;
};

function toDateTime(dateString: string): Date {
  const parsedDate = new Date(dateString);
  if (Number.isNaN(parsedDate.getTime())) {
    throw new Error('Invalid date format');
  }
  return parsedDate;
}

function toString(date: Date, format = 'YYYY-MM-DD'): string {
  const year = date.getFullYear();
  const shortYear = String(year).slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const singleMonth = String(date.getMonth() + 1);
  const day = `0${date.getDate()}`.slice(-2);
  const singleDay = String(date.getDate());
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return format
    .replace('YYYY', String(year)) // 4자리 연도
    .replace('YY', shortYear) // 2자리 연도
    .replace('MM', month) // 2자리 월
    .replace('M', singleMonth) // 1자리 또는 2자리 월
    .replace('DD', day) // 2자리 일
    .replace('D', singleDay) // 1자리 또는 2자리 일
    .replace('HH', hours) // 2자리 시간
    .replace('mm', minutes) // 2자리 분
    .replace('ss', seconds); // 2자리 초
}

function DateTime({ children, format }: DateProps) {
  const dateTime = toDateTime(children);
  return <span className={clsx('datetime')}>{toString(dateTime, format)}</span>;
}

export default DateTime;
