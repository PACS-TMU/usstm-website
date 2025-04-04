'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SearchParamsHandler({ onSuccess }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('purchase') === 'success') {
      onSuccess();
    }
  }, [searchParams, onSuccess]);

  return null;
}
