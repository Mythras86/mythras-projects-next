import Link from "next/link";
import "./Footer.scss";

export default function Footer() {
    return (
      <footer id='footerCont'>
        <Link href={'/'}>Főoldal</Link>
        <Link href={'/projects'}>Projektek</Link>
        <Link href={'/auth?mode=belepes'}>Azonosítás</Link>
        <Link href={'/404teszt'}>404 Teszt</Link>
      </footer>
     
    );
}