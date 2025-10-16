import { Metadata } from 'next';
import Details from '@/components/home/Details/Details';
import Greeting from '@/components/home/Greeting';
import Intro from '@/components/home/Intro/Intro';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Main site, introduction'
};

export default function Home() {
  return (
    <main>
      <Greeting />
      <Intro></Intro>
      <Details></Details>
    </main>
  );
}
