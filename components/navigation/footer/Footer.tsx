import "./Footer.scss";
import gitHubLogo from '../../../public/images/logoGitHub.png';
import SocialMediaItem from "./SocialMedia";
import ButtonFlicker from "./ButtonFlicker";

export default function Footer() {

  
  
  return (
    <footer id='mainFooter'>
      <SocialMediaItem link={"https://github.com/Mythras86/mythras-projects-next"} image={gitHubLogo} alt={"gitHubLogo"} label={"GitHub Repo"} />
      <ButtonFlicker />
    </footer>
  );
}