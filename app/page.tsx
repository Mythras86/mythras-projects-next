'use client'

import './page.scss';
import { useSession } from 'next-auth/react';
import IntroSlide from '@/components/IntroSlide';
import Image from "next/image";
import logo from "@/public/assets/icon.svg"


export default function Home() {

  const { data: session, status} = useSession();
  
  const userName = session?.user?.name;

  return (
    <>
    <title>Főoldal</title>
    <main id='mainSite'>
      {!session && 
        <h1>Welcome to my Site! :D</h1>
      }
      {session && 
        <h1>Welcome back {userName}! :3</h1>
      }

      {/* intro block */}

      <div className="introBlock">
        <Image src={logo} alt='logo'></Image>
      </div>

      <div className='introBlock'>
        <p className='neonGreen text2 center'>
          Hello World!
        </p>
        <p className='neonGreen text2 center'>
          I'm Krisztián Farkas aka "Mythras"
        </p>

        <IntroSlide />
      </div>

      {/* site details block */}
      
      <h2 className='margTop1'>Purpose of this Site</h2>
      <div>
        <p className='neonWhite text0'>
          My main goal is to keep this site as an example of my skills, to show off my future works (with respecting the contract rules) and also to house some personal projects on it.
        </p>
      </div>

      <h2 className='margTop1'>Technical Details</h2>
      <div>
        <p className='neonWhite text0 center'>IDE: Visual Studio Code</p>
        <p className='neonWhite text0 center'>Version Control: GIT</p>
        <p className='neonWhite text0 center'>Framework: NextJS (full stack) + Typescript</p>
        <p className='neonWhite text0 center'>Authentication: NextAuth</p>
        <p className='neonWhite text0 center'>Database: MongoDB with Mongoose</p>
        <p className='neonWhite text0 center'>Theme: self made Neon Lights /scss</p>
      </div>

      <h2 className='margTop1'>Future Plans</h2>
      <div>
        <p className='neonWhite text0'>
          Theme selector for the Site (night, light)
        </p>
        <p className='neonWhite text0'>
          User selectable theme colors
        </p>
        <p className='neonWhite text0'>
          Snake Game with javascript for the projects
        </p>
        <p className='neonWhite text0'>
          Character creator and sheet for homebrew Shadowrun
        </p>
      </div>

      

    </main>
    </>
  );
}
