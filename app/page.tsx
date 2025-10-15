import cl from './page.module.scss';
import IntroSlide from '@/components/home/Intro/IntroSlide';
import Image from "next/image";
import logo from "@/public/images/icon.svg";
import { Metadata } from 'next';
import Greeting from '@/components/home/Greeting';
import ButtonDownloadCV from '@/components/home/ButtonDownloadCV';
import Collapsible from '@/components/Collapsible/Collapsible';
import Home from '@/components/home/Home';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Main site, introduction'
};

export default function App() {
  return (
    <Home></Home>
  );
}
