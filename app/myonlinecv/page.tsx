import Image from "next/image";
import "./page.scss";

export default function Oneletrajz() {
  return (<main id='oneletrajz'>
    <section>
      <div id="profilkep">
        <Image src={'/assets/profilkep.jpg'} alt="profilkep" priority fill style={{objectFit:"contain"}}/>
      </div>
      <div id="alapadatok">
        <h1>Farkas Krisztián</h1>
        <div className="neonGreen text0 center">Születési év</div>
        <div className="neonWhite text0">1986</div>
        <div className="neonGreen text0 center">Lakhely</div>
        <div className="neonWhite text0">Dunakesz</div>
        <div className="neonGreen text0 center">Email</div>
        <div className="neonWhite text0">kfarkas86@gmail.com</div>
      </div>    
    </section>
    <section>
      <h1>Legmagasabb iskolai végzettség</h1>
      <p className="neonWhite text0">Lorem ipsum</p>
      <p className="neonWhite text0">Lorem ipsum</p>
      <p className="neonWhite text0">Lorem ipsum</p>
    </section>

    <section>
      <h1>Beszélt nyelvek</h1>
      <p className="neonWhite text0">Lorem ipsum</p>
      <p className="neonWhite text0">Lorem ipsum</p>
      <p className="neonWhite text0">Lorem ipsum</p>
    </section>

    <section>
      <h1>Munkahelyek</h1>
      <p className="neonWhite text0">Lorem ipsum</p>
      <p className="neonWhite text0">Lorem ipsum</p>
      <p className="neonWhite text0">Lorem ipsum</p>
    </section>

    <section>
      <h1>Webfejlesztés</h1>
      <p className="neonWhite text0">Lorem ipsum</p>
      <p className="neonWhite text0">Lorem ipsum</p>
      <p className="neonWhite text0">Lorem ipsum</p>
    </section>

    </main>
  );
}