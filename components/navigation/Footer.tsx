'use client'

import "./Footer.scss";
import gitHubLogo from '../../public/assets/logoGitHub.png';
import SocialMediaItem from "./SocialMedia";
import { useDispatch, useSelector } from "react-redux";
import { flickerActions } from "@/lib/store/flicker.slice";

export default function Footer() {
  const dispatch = useDispatch();
  const flickerIsOn = useSelector((state: any) => state.flickerIsOn.value);

  const toggleFlicker = () => {
    dispatch(flickerActions.toggleFlicker());
  }

  
  
  return (
    <footer id='mainFooter'>
      <SocialMediaItem link={"https://github.com/Mythras86/mythras-projects-next"} image={gitHubLogo} alt={"gitHubLogo"} label={"GitHub Repo"} />
      <button className="text0 neonBlue hover flickerButton" type="button" onClick={toggleFlicker}>Flickering {flickerIsOn? 'OFF' : 'ON'}</button>
    </footer>
     
  );
}