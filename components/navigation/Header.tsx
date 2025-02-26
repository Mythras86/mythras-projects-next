"use client"

import { useState } from 'react';
import { navData } from './routes.data';
import Link from 'next/link';
import "./Header.scss";
import { usePathname } from 'next/navigation';
import SignOutButton from './SignOut';
import { SessionProvider, useSession } from 'next-auth/react';

export default function Header () {

  const { data: session, status} = useSession();

  const [burgerOpen, burgerToggle] = useState(false);

  function toggleBurger() {
    burgerToggle((current) => !current)
  }

  const path = usePathname();

  return (
    <header id="headerCont">

      <div id='headLine'>
        <div id='icon' className='border-white bg-black'>
          <Link href={'/'}>
            <img src={'/assets/icon.svg'} alt='mySvgImage' />
          </Link>
        </div>

        <div id='greeting' className='border-white color-white bg-black'>
          {!session ? 'Üdvözöllek az oldalamon!' : session?.user?.name}
        </div>
        <div id='burger' 
        className={burgerOpen ? "reverseWhite" : "neonWhite hover"}
        onClick={toggleBurger}>
          &#9776;
        </div>
      </div>


      { burgerOpen === true &&
        <nav>
          <ul>
            {navData.map(data => 
              <li key={data.id}>
                <Link
                href={data.id}
                onClick={toggleBurger}
                className={path.startsWith(`/${data.id}`) ? 'reverseWhite' : 'neonWhite hover'}
                >
                  {data.nev}
                </Link>
              </li>
            )}
          </ul>
            <SignOutButton />
        </nav>
      } 
    </header>
  );
}