import Image from "next/image";
import "./backgroundImage.scss";

export default function BackgroundImage() {
    return (
        <div className="imgCont">
            <Image className="imgAllo" src={'/assets/kiserlet4allo.svg'} alt="bg" priority fill style={{objectFit:"cover"}}/>
            <Image className="imgFekvo" src={'/assets/kiserlet4fekvo.svg'} alt="bg" priority fill style={{objectFit:"cover"}}/>
            <div className="layer"></div>
        </div>
    );
}