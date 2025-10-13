import cl from './page.module.scss';
import IntroSlide from '@/components/home/IntroSlide';
import Image from "next/image";
import logo from "@/public/images/icon.svg";
import { Metadata } from 'next';
import Greeting from '@/components/home/Greeting';
import ButtonDownloadCV from '@/components/home/ButtonDownloadCV';
import Collapsible from '@/components/Collapsible/Collapsible';

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

      <Collapsible selectId={'colorTest'} summary={'Színteszt'} summaryClass={'neonOrange text2 w100'}>
        <div className='text1 w100 center neonBlue hover'>kék</div>
        <div className='text1 w100 center reverseBlue'>kék</div>
        <div className='text1 w100 center neonBrown hover'>barna</div>
        <div className='text1 w100 center reverseBrown'>barna</div>
        <div className='text1 w100 center neonGreen hover'>zöld</div>
        <div className='text1 w100 center reverseGreen'>zöld</div>
        <div className='text1 w100 center neonOrange hover'>narancs</div>
        <div className='text1 w100 center reverseOrange'>narancs</div>
        <div className='text1 w100 center neonPurple hover'>lila</div>
        <div className='text1 w100 center reversePurple'>lila</div>
        <div className='text1 w100 center neonRed hover'>piros</div>
        <div className='text1 w100 center reverseRed'>piros</div>
        <div className='text1 w100 center neonTeal hover'>cián</div>
        <div className='text1 w100 center reverseTeal'>cián</div>
        <div className='text1 w100 center neonWhite hover'>fehér</div>
        <div className='text1 w100 center reverseWhite'>fehér</div>
        <div className='text1 w100 center neonYellow hover'>sárga</div>
        <div className='text1 w100 center reverseYellow'>sárga</div>
        <div className='text1 w100 center neonGrey hover'>szürke</div>
      </Collapsible>


      {/* site details block */}
      
      <h2>Purpose of this Site</h2>
      <section className={cl.introBlock}>
        <p className='neonWhite text0'>
          My main goal is to keep this site as an example of my skills, to show off my future works (with respecting the contract rules) and also to house some personal projects on it.
        </p>
      </section>

      <h2>Technical Details</h2>
      <section className={cl.introBlock}>
        <div className='neonWhite text0 center w100'>IDE: Visual Studio Code</div>
        <div className='neonWhite text0 center w100'>Version Control: GIT</div>
        <div className='neonWhite text0 center w100'>Framework: NextJS (full stack) + Typescript</div>
        <div className='neonWhite text0 center w100'>Authentication: NextAuth</div>
        <div className='neonWhite text0 center w100'>Database: MongoDB with Mongoose</div>
        <div className='neonWhite text0 center w100'>Theme: self made Neon Lights /scss</div>
      </section>

      <h2>Future Plans</h2>
      <section className={cl.introBlock}>
        <div className='neonWhite text0 w100'>
          Theme selector for the Site (night, light)
        </div>
        <div className='neonWhite text0 w100'>
          User selectable theme colors
        </div>
        <div className='neonWhite text0 w100'>
          Snake Game with javascript for the projects
        </div>
        <div className='neonWhite text0 w100'>
          Character creator and sheet for homebrew Shadowrun
        </div>
      </section>
    </main>
  );
}
