"use client"

import "./Header.scss";
import NavItem from './NavItem';
import { useDispatch, useSelector } from "react-redux";
import { isMenuOpenActions } from "@/lib/store/isMenuOpen.slice";
import { useSession } from "next-auth/react";

export default function Header () {

  const { data: session, status, update} = useSession();
  const name: string | null | undefined = session?.user?.name;

  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: any) => state.isMenuOpen.value);

  const toggleMenu = () => {
    dispatch(isMenuOpenActions.toggleMenu());
  }

  return (
    
    <header id="mainHeader" className={isMenuOpen ? 'open' : 'closed'}>
      <nav>
        <ul>

          {/* balra zárt főoldal/logo */}
          <NavItem isMenuOpen={isMenuOpen} href={'/'} liClassName="toLeft"
          linkColor="neonPurple"
          linkHover="reversePurple"
          >Home</NavItem>

          {/* középen elhelyezett burger menu, ami bezárás lesz */}
          <button id="burger" className={isMenuOpen? 'open neonRed hover text2 flex0' : 'closed neonWhite hover flex0'} type="button" onClick={toggleMenu}>
            {isMenuOpen? 'Close' : ''}
          </button>

          {/* középen elhelyezett egyéb menu elemek */}
          <NavItem isMenuOpen={isMenuOpen} href={'/myprojects'} liClassName="navMenu">My Projects</NavItem>
          <NavItem isMenuOpen={isMenuOpen} href={'/aboutme'} liClassName="navMenu">About Me</NavItem>
          <NavItem isMenuOpen={isMenuOpen} href={'/contactme'} liClassName="navMenu">Contact Me</NavItem>

          {/* jobbra zárt user gomb */}
          {session?
            <NavItem isMenuOpen={isMenuOpen} href={'/profile'} liClassName="toRight"
            linkColor="neonPurple"
            linkHover="reversePurple"
            >Profile</NavItem>
            :
            <NavItem isMenuOpen={isMenuOpen} href={'/authentication'} liClassName="toRight"
            linkColor="neonPurple"
            linkHover="reversePurple"
            >User</NavItem>
          }
        </ul>
      </nav>
      {session &&
        <div className="color-teal">Logged in as: {name}</div>
      }
    </header>
  );
}