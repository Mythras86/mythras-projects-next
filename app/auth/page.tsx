'use client'

import { useSearchParams } from 'next/navigation';
import './page.scss';
import Belepes from './components/Belepes';
import Regisztracio from './components/Regisztracio';

export default function Azonositas() {

  const searchParams = useSearchParams();
  const isLogin = searchParams.get('mode') === 'belepes';

  return (
    <>
      {isLogin &&
          <Belepes />
      }
      {!isLogin &&
          <Regisztracio />
      }
    </>
  );
}