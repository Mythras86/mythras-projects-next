import cl from './page.module.scss';
import IntroSlide from '@/components/home/IntroSlide';
import Image from "next/image";
import logo from "@/public/images/icon.svg";
import { Metadata } from 'next';
import Greeting from '@/components/home/Greeting';
import ButtonDownloadCV from '@/components/home/ButtonDownloadCV';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Main site, introduction'
};

export default function Home() {

  return (
    <main>
      
      <Greeting />

      {/* intro block */}

      <section className={cl.introBlock}>
        <div className={cl.introItem}>
          <Image className={cl.introImg} src={logo} alt='logo' placeholder='blur' blurDataURL="@/public/images/icon.svg"></Image>
        </div>

        <div className={cl.introItem}>
          <p className='neonGreen text2 center'>
            Hello World!
          </p>
          <p className='neonGreen text2 center'>
            I'm Krisztián Farkas aka "Mythras"
          </p>

          <IntroSlide />

          <div className="buttonCont">
            <ButtonDownloadCV></ButtonDownloadCV>
          </div>
        </div>
      </section>


      {/* site details block */}
      
      <h2>Purpose of this Site</h2>
      <section className={cl.introBlock}>
        <p className='neonWhite text0'>
          My main goal is to keep this site as an example of my skills, to show off my future works (with respecting the contract rules) and also to house some personal projects on it.
        </p>
      </section>

      <h2>Technical Details</h2>
      <section className={cl.introBlock}>
        <p className='neonWhite text0 center'>IDE: Visual Studio Code</p>
        <p className='neonWhite text0 center'>Version Control: GIT</p>
        <p className='neonWhite text0 center'>Framework: NextJS (full stack) + Typescript</p>
        <p className='neonWhite text0 center'>Authentication: NextAuth</p>
        <p className='neonWhite text0 center'>Database: MongoDB with Mongoose</p>
        <p className='neonWhite text0 center'>Theme: self made Neon Lights /scss</p>
      </section>

      <h2>Future Plans</h2>
      <section className={cl.introBlock}>
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
      </section>
    </main>
  );
}
