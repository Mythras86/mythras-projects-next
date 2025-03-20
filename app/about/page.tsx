import Image from "next/image";
import myProfileImage from './../../public/assets/profilkep.jpg';
import "./page.scss";

export default function Oneletrajz() {
  return (
    <main id='oneletrajz'>
      <div id="profilkep">
        <Image src={myProfileImage} alt="profilkep" priority sizes="100vw" style={{objectFit: "contain", width: '100%', maxHeight: '500px'}}/>
      </div>

      <div className="section">
        <h1>Farkas Krisztián</h1>
        <div className="neonGreen text0 center">Születési év</div>
        <div className="neonWhite text0">1986</div>
        <div className="neonGreen text0 center">Lakhely</div>
        <div className="neonWhite text0">Dunakesz</div>
      </div>

      <div className="section">
        <h1>Legmagasabb iskolai végzettség</h1>
        <p className="neonWhite text0">Lorem ipsum</p>
        <p className="neonWhite text0">Lorem ipsum</p>
        <p className="neonWhite text0">Lorem ipsum</p>
      </div>    

      <div className="section">
        <h1>Beszélt nyelvek</h1>
        <p className="neonWhite text0">Lorem ipsum</p>
        <p className="neonWhite text0">Lorem ipsum</p>
        <p className="neonWhite text0">Lorem ipsum</p>
      </div>

      <div className="section">
        <h1>Munkahelyek</h1>
        <p className="neonWhite text0">Lorem ipsum</p>
        <p className="neonWhite text0">Lorem ipsum</p>
        <p className="neonWhite text0">Lorem ipsum</p>
      </div>

      <div className="section">
        <h1>Webfejlesztés</h1>
        <p className="neonWhite text0">Lorem ipsum</p>
        <p className="neonWhite text0">Lorem ipsum</p>
        <p className="neonWhite text0">Lorem ipsum</p>
      </div>

    </main>
  );
}