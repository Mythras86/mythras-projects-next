"use client"

import "./Header.scss";
import { useSession } from "next-auth/react";
import Modal from "@/components/modal/Modal";
import NavMenu from "./components/NavMenu";
import { useState } from "react";
import NavItem from "./components/NavItem";

export default function Header () {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const { data: session, status, update} = useSession();
  const name: string | null | undefined = session?.user?.name;

  return (
    <>
    {isMenuOpen ?
      <Modal closeModal={()=>setMenuOpen(false)}>
        <h1>Navigation</h1>
        <main onClick={()=>setMenuOpen(false)}>
          <nav id="burgerOpenNav">
            <ul>
              <NavItem liClassName="w100 center" aColor="neonOrange hover" aColorSelected="reverseOrange" href={"/"}>Home</NavItem>
              
              <NavMenu></NavMenu>

              {session?
                <NavItem liClassName="w100 center" aColor="neonOrange hover" aColorSelected="reverseOrange" href={"/profile"}>Profile</NavItem>
                :
                <NavItem liClassName="w100 center" aColor="neonOrange hover" aColorSelected="reverseOrange" href={"/authentication"}>User</NavItem>
              }
            </ul>
          </nav>
        </main>
      </Modal>
      :
      <>
        <header id="mainHeader">
          <nav>
            <ul>

              {/* balra zárt főoldal/logo */}
              <NavItem liClassName="flex0 center left" aColor="neonOrange hover" aColorSelected="reverseOrange" href={"/"}>Home</NavItem>

              {/* középen elhelyezett burger menu, ami bezárás lesz */}
              <button id="burger" type="button" className="neonWhite" onClick={()=>setMenuOpen(true)}></button>

              {/* középen elhelyezett egyéb menu elemek */}
              <NavMenu id="menuNormal"></NavMenu>

              {/* jobbra zárt user gomb */}
              {session?
                <NavItem liClassName="flex0 center right" aColor="neonOrange hover" aColorSelected="reverseOrange" href={"/profile"}>Profile</NavItem>
                :
                <NavItem liClassName="flex0 center right" aColor="neonOrange hover" aColorSelected="reverseOrange" href={"/authentication"}>User</NavItem>
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