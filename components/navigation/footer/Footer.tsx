import "./Footer.scss";
import gitHubLogo from '../../../public/images/logoGitHub.png';
import linkedInLogo from '../../../public/images/LI-Logo.png';
import SocialMediaItem from "./SocialMedia";
import ButtonFlicker from "./ButtonFlicker";

export default function Footer() {

  
  
  return (
    <footer id='mainFooter'>
      <SocialMediaItem 
      link={"https://github.com/Mythras86/mythras-projects-next"}
      image={gitHubLogo}
      imageSrc='../../../public/images/logoGitHub.png'
      alt={"gitHubLogo"}
      label={"GitHub Repo"} />
      <SocialMediaItem 
      link={"https://linkedin.com/in/krisztián-farkas-04ab70250"}
      image={linkedInLogo}
      imageSrc='../../../public/images/logoGitHub.png'
      alt={"linkedInLogo"}
      label={"LinkedIn Page"} />

      {/* a button to start the background flickering effect */}
      <ButtonFlicker />
    </footer>
  );
}