"use client"

import { useState } from 'react';
import { navData } from './navData.data';
import Link from 'next/link';
import "./style.scss";

export default function Header () {

  const [burgerOpen, burgerToggle] = useState(false);

  function toggleBurger() {
    burgerToggle((current) => !current)
  }

  return (
    <header id="headerCont">

      <div id='headLine'>
        <div id='icon' className='border-teal bg-black'>
          <Link href={'/'}>
            <img src={'/assets/icon.svg'} alt='mySvgImage' />
          </Link>
        </div>
        <div id='greeting' className='border-teal color-teal bg-black'>
          Üdvözöllek az oldalamon!
        </div>
        <div id='burger' 
        className={burgerOpen ? "border-white color-white bg-teal" : "border-teal color-teal bg-black"}
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
                className='bg-black border-teal color-teal'
                >
                  {data.nev}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      } 
    </header>
  );
}