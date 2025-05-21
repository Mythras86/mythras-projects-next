import Image from "next/image";
import profilePic from './../../public/images/profilkep.jpg';
import "./page.scss";
import { Metadata } from "next";
import PBlock from "./PBlock";

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Some thing about me'
};

export default function AboutMe() {
  return (
    <main id='aboutMe'>

      <h1>About Me</h1>

      <div id="profilePic">
        <Image src={profilePic} alt="profile picture" placeholder="blur" blurDataURL="./../../public/images/profilkep.jpg"/>
      </div>

      <div className="textCont ">
        <PBlock>
          I never thought about how hard is to properly write an introduction until now. I feel like kind of lost, because I dont really know, what others are interested in me, what should I tell or what should I keep a secret?
        </PBlock>
        <PBlock>
          Anyway that much I can tell, im a really honest person. People tend to underestimate this, or think that it's not important, but in the other hand, I will never smile and backstab anyone. I'm a mostly calm and quiet person and I try to avoid conflicts, but I will make a stand if it's neccessary.
        </PBlock>
        <PBlock>
          Originally I wanted to work as an economist or manager as I have a BSC degree in that, but I quickly realized thats not my way and without good contacts, it's really hard to start a carrier.
        </PBlock>
        <PBlock>
          But how I came to web development? Thats a funny story. My elder brother had some lectures in macro and micro economy and asked me to help him understand. We ended up talking about how systems work by the rules and agreed, that logic is a common language between us. Even we didn't know much about each others field of profession, but we still understood the other. I was amazed and thought, that web development is much more creative in its ways I will need less contacts to prove my skills so I wanted to learn it. 
        </PBlock>
        <PBlock>
          To satisfy my curiosity once I filled an international adaptive Mensa test and by the score, my logical IQ can be above 125. The automated email then asked to have a higher test in person to make a more precise measure, but I haven't made it yet. 
        </PBlock>
        <PBlock>
          I have cats (but I like any animal in general), I love metal music (not all type btw.) and I'm always eager to learn as I want to know how things work (pretty much everything, I'm a wiki worm).
        </PBlock>
        <PBlock>
          Huhh, that was a nice wall of text and you still not know nothing of me :D By the way, here comes a random secret:
        </PBlock>
        <details>
          <summary className="text2 neonRed">
            Top Secret, read it to your own risk!
          </summary>
          <p className="neonWhite text1">
            The main hero, Starlord, in Guardians Of The Galaxy is played by Chris Pratt.
            <br />
            <br />If you misread his name, you get a vermin on bbq you get...
            <br />
            <br /><span className="neonOrange text2">Crisp Rat.</span>
            <br />
            <br />Now you can't unsee it and you have to carry this burden to your grave :O
          </p>
        </details>
      </div>

    </main>
  );
}