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

      <h2>Let me talk about this site</h2>

      <div>
        <p className='neonWhite text2 center'>IDE: Visual Studio Code</p>
        <p className='neonWhite text2 center'>Version Control: GIT</p>
        <p className='neonWhite text2 center'>Framework: NextJS (full stack) + Typescript</p>
        <p className='neonWhite text2 center'>Authentication: NextAuth</p>
        <p className='neonWhite text2 center'>Database: MongoDB with Mongoose</p>
        <p className='neonWhite text2 center'>empty</p>
      </div>


    </main>
    </>
  );
}
