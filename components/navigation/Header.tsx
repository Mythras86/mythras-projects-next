"use client"

import "./Header.scss";
import NavItem from './NavItem';
import NavUser from "./NavUser";
import NavLogo from "./NavLogo";
import { useDispatch, useSelector } from "react-redux";
import { isMenuOpenActions } from "@/lib/store/isMenuOpen.slice";

export default function Header () {

  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: any) => state.isMenuOpen.value);

  const toggleMenu = () => {
    dispatch(isMenuOpenActions.toggleMenu());
  }

  return (
    
    <header id="mainHeader" className={isMenuOpen ? 'open' : 'closed'}>
      <nav>
        <ul>
          {/* középen elhelyezett burger menu, ami bezárás lesz */}
          <button id="burger" className={isMenuOpen? 'open neonRed hover text2' : 'closed neonWhite hover'} type="button" onClick={toggleMenu}>
            {isMenuOpen? 'Close' : ''}
          </button>

          {/* balra zárt főoldal/logo */}
          <NavLogo isMenuOpen={isMenuOpen} ></NavLogo>

          {/* középen elhelyezett egyéb menu elemek */}
          <NavItem isMenuOpen={isMenuOpen} href={'/projects'}>Projects</NavItem>
          <NavItem isMenuOpen={isMenuOpen} href={'/about'}>About Me</NavItem>
          <NavItem isMenuOpen={isMenuOpen} href={'/contact'}>Contact</NavItem>

          <NavUser isMenuOpen={isMenuOpen} />
        </ul>
      </nav>
    </header>
  );
}