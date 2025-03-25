'use client'

import "./NavUser.scss";
import Link from "next/link";
import "./Footer.scss";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { isMenuOpenActions } from "@/lib/store/isMenuOpen.slice";

interface IuserOptions {
  isMenuOpen: boolean;
}

export default function NavUser({isMenuOpen}: IuserOptions) {
    
  const { data: session, status} = useSession();
  
  const userName = session?.user?.name;

  const dispatch = useDispatch();
  
  const closeMenu = () => {
      if (isMenuOpen) {
          dispatch(isMenuOpenActions.closeMenu());
      }
  }
  
  const path = usePathname();
  
  const [userMenuOpen, changeStatus] = useState(false);

  function changeUserStatus(newState: boolean) {
    changeStatus((initial)=> newState);
  }

  return (
    <li id="navUser" className={isMenuOpen ? 'open' : 'closed'}>
      {session &&
      <>
        <button className="neonPurple hover text2" type="button" onClick={()=>changeUserStatus(!userMenuOpen)}>{userName}</button>
        {userMenuOpen &&
          <>
            <Link 
            className={`text2 center hover ${path.startsWith('/profile') ? 'reverseWhite' : 'neonWhite hover'}`} 
            href={"/profile"}
            onClick={()=>{closeMenu();changeUserStatus(false)}}
            >
              Profile
            </Link>
            <button className="text2 neonRed center hover" type="button" onClick={() => {closeMenu(); signOut({ callbackUrl: '/' })}}>Sign Out</button>
            </>
          }
      </>
      }
      {!session &&
        <Link className="text2 center neonPurple hover" href="/signin" onClick={closeMenu}>Sign In</Link>
      }
    </li>
  );
}