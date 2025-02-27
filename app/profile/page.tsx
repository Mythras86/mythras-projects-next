'use client'

import './page.scss';
import Input from '@/components/Input';
import SignOut from '@/components/SignOut';
import { useSession } from 'next-auth/react';

export default function Profil() {

  const { data: session, status} = useSession();

  return (
    <>
      <title>Profil</title>
      <h1>Profil</h1>
      <main id='formCont'>
        <form action="">
          {session &&
            <>
              <Input label='Név' id='name' type='text' defaultValue={session?.user?.name}></Input>
              <div className='neonWhite text1 center'>{session?.user?.email}</div>
            </>
          }
        </form>
        <div className="buttonCont">
          <SignOut />
        </div>
      </main>
    </>
  );
}