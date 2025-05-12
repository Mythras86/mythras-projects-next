import Image from "next/image";
import myProfileImage from './../../public/assets/profilkep.jpg';
import "./page.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Me',
};


export default function Oneletrajz() {
  return (
    <main id='oneletrajz'>
      <div id="profilkep">
        <Image src={myProfileImage} alt="profilkep"/>
      </div>

      <div>
        <p className="text0 neonWhite">
          Im a bit of a creative dreamer since my childhood, huge thanks to my dad!
          <br />
          He helped me to develop creative thinking by teaching chess, origami and a passion for reading. 
          I also tried crafting and drawing and though never achieved great height in them, i value the experience of those tries!
          <br />
          For my early life i didnt have a clue, what to do with myself: the early computers fascinated me, but programming was so hard that time, that scared me away. 
          I had a passion in drawing, but was 
        </p>
      </div>


    </main>
  );
}