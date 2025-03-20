import "./Footer.scss";
import gitHubLogo from '../../public/assets/gitHubLogo.png';
import SocialMediaItem from "./SocialMedia";

export default function Footer() {
    return (
      <footer id='mainFooter'>
        <SocialMediaItem link={"https://github.com/Mythras86/mythras-projects-next"} image={gitHubLogo} alt={"gitHubLogo"} label={"GitHub Repo"} />
      </footer>
     
    );
}