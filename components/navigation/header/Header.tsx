"use client"

import React from "react";
import "./Header.scss";
import { useSession } from "next-auth/react";
import Modal from "@/components/modal/Modal";
import NavHome from "./NavHome";
import NavUser from "./NavUser";
import NavProfile from "./NavProfile";
import HeaderHome from "@/components/Header/HeaderHome";
import HeaderShadowrun from "@/app/myprojects/shadowrun-in-hungary/components/Header/HeaderShadowrun";

export default function Header () {

  const [isMenuOpen, setMenuStatus] = React.useState(false);

  const { data: session, status, update} = useSession();
  const name: string | null | undefined = session?.user?.name;

  return (
    <>
    {isMenuOpen ?
      <Modal closeModal={()=>setMenuStatus(false)}>
        <main>
        </main>
      </Modal>
      :
      <>
        <header id="mainHeader" className={isMenuOpen ? 'open' : 'closed'}>
          <nav>
            <ul>

              {/* balra zárt főoldal/logo */}
              <NavHome></NavHome>

              {/* középen elhelyezett burger menu, ami bezárás lesz */}
              <button id="burger" className={isMenuOpen? 'open neonRed hover text2' : 'closed neonWhite hover '} type="button">
                {isMenuOpen? 'Close' : ''}
              </button>

              {/* középen elhelyezett egyéb menu elemek */}
              <HeaderHome></HeaderHome>
              <HeaderShadowrun></HeaderShadowrun>
              <menu id="mainHeaderMenu" className="flex1 flexRow center"></menu>

              {/* jobbra zárt user gomb */}
              {session?
                <NavProfile></NavProfile>
                :
                <NavUser></NavUser>
              }
            </ul>
          </nav>
          {session &&
            <div className="color-teal">Logged in as: {name}</div>
          }
        </header>
      </>
    }
    </>


  );
}