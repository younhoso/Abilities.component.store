'use client';

import { useEffect } from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, []);

  return <div onClick={() => reset()}>Error 페이지</div>;
}
