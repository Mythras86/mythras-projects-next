'use client'

import "./NavUser.scss";
import Link from "next/link";
import "./Footer.scss";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

interface IuserOptions {
  isMenuOpen: boolean;
}

export default function NavUser({isMenuOpen}: IuserOptions) {
    
  const [menuStatus, changeStatus] = useState(false);
  const { data: session, status} = useSession();

  const path = usePathname();
  
  function changeUserMenuStatus(newState: boolean) {
    changeStatus((initial)=> newState);
  }

  const userName = session?.user?.name;

  return (
    <li id="navUser" className={isMenuOpen ? 'open' : 'closed'}>
      {session &&
      <>
        <button className="neonPurple hover text2" type="button" >{userName}</button>
        {menuStatus &&
          <>
            <Link 
            className={`text2 center hover ${path.startsWith('/profile') ? 'reverseWhite' : 'neonWhite hover'}`} 
            href={"/profile"}
            onClick={()=>changeUserMenuStatus(false)}
            >
              Profile
            </Link>
            <button className="text2 neonRed center hover" type="button" onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</button>
            </>
          }
      </>
      }
      {!session &&
        <Link className="text2 center neonPurple hover" href="/signin" onClick={()=>changeUserMenuStatus(false)}>Sign In</Link>
      }
    </li>
  );
}