import cl from './Intro.module.scss';
import Image from "next/image";
import logo from "@/public/images/icon.svg";
import ButtonDownloadCV from "../ButtonDownloadCV";
import IntroSlide from "./IntroSlide";

export default function Intro() {
      
    return (
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
    );
}