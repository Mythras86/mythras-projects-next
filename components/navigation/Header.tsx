"use client"

import { useState } from 'react';
import "./Header.scss";
import { usePathname } from 'next/navigation';
import NavItem from './NavItem';
import { useSession } from 'next-auth/react';
import SignOutButton from '../SignOut';

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

        <div id='greeting' className='border-white color-white bg-black'>
          {!session ? 'Üdvözöllek az oldalamon!' : 'Üdv újra itt, '+ session?.user?.name +'!'}
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
            <NavItem href='/' text='Főoldal'  />
            <NavItem href='/projects' text='Projektek'  />
            
            {!session &&
              <>
                <NavItem href='/auth?mode=belepes' text='Belépés'  />
                <NavItem href='/404teszt' text='404 Teszt'  />
              </>
            }

            {session &&
              <>
                <NavItem href='/profile' text='Profil'  />
                <li>
                  <SignOutButton/>
                </li>
              </>
            }
          </ul>
        </nav>
      } 
    </header>
  );
}