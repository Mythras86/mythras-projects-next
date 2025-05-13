import Image from "next/image";
import myProfileImage from './../../public/assets/profilkep.jpg';
import "./page.scss";
import { Metadata } from "next";
import PBlock from "./PBlock";

export const metadata: Metadata = {
  title: 'About Me',
};

export default function Oneletrajz() {
  return (
    <main id='oneletrajz'>
      <div id="profilkep">
        <Image src={myProfileImage} alt="profilkep"/>
      </div>

      <div className="textCont ">
        <PBlock>
          I'm a bit of a latecomer to this industry, but I believe, I belong here and I want to be part of projects that pushes my skills to the edge and beyond! I love planning and problem solving and for that I have an urge to learn new things.
        </PBlock>
        <PBlock>
          Originally I planned to work as an economist or manager as I have a BSC degree in that, but I quickly realized thats not my way and without good contacts, it's really hard to start a carrier.
        </PBlock>
        <PBlock>
          But how I came to web development? Thats a funny story. My elder brother had some lectures in macro and micro economy and asked me to help him understand. We ended up talking about how systems work by the rules and agreed, that logic is a common language between us. Even we didn't know much about each others field of profession, but we still understood the other. I was amazed and thought, that web development is much more creative in its ways I will need less contacts to prove my skills so I wanted to learn it. 
        </PBlock>
        <PBlock>
          To satisfy my curiosity once I filled an international adaptive Mensa test and by the score, my logical IQ can be above 125. The automated email then asked to have a higher test in person to make a more precise measure, but I haven't made it yet. 
        </PBlock>
        <PBlock>
          By the way I'm a mostly calm and quiet person and I try to avoid conflicts (but take them, if neccessary). I like talking about meaningful stuff, but I prefer not to chit-chat for no reason. I prefer working in small teams as I think, thats the best way, but I'm not afraid to work alone, or in bigger teams.
        </PBlock>
      </div>

    </main>
  );
}