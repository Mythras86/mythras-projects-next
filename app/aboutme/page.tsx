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
          I'm a bit of a latecomer to this industry, but I hope, that I can leave my mark and be part of projects that pushes my skills to the edge and beyond! I love planning and problem solving, albeit designing is not my strong suit so to say.
        </PBlock>
        <PBlock>
          Originally I planned to work as an economist or manager as I have a BSC degree in that, but I quickly realized the sour situation: most corporations don't care about this, or employ someone the CEO trust, even if she/he lacks of the skills. Without connections I felt a little disappointed and seeked other chances to employ my abilities.
        </PBlock>
        <PBlock>
          From my childhood I enjoyed things that needed some creativity and structural, strategical thinking: chess, lego, later strategic games and RPG's on pc and tabletop. Also tried drawing, messed some time with Photoshop but not that much i could make a living with. These interests made a stable base for my logical thinking, the ability to see the whole picture and to find the connections between... pretty much everything. If I want to highlight a positive attribute, that truly describes me, that is the will to understand.
        </PBlock>
        <PBlock>
          I'm pretty much the lazy type. No, not that one who sleeps all day, but I dont want to do anything unnecessary. For that I always try to fully understand any situation and make a true solution for that. I also understand, that some times you only able to temporary patch things up, but I strongly believe that a full solution is much better.
        </PBlock>
        <PBlock>
          To satisfy my curiosity once I filled an international adaptive Mensa test and by the score, my logical IQ can be above 125. The automated email then asked to have a higher test in person to make a more precise measure, but I haven't made it yet. 
        </PBlock>
      </div>


    </main>
  );
}