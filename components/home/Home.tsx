import Details from "./Details/Details";
import Greeting from "./Greeting";
import Intro from "./Intro/Intro";

export default function Home() {

  return (
    <main>
      
      <Greeting />
      <Intro></Intro>
      <Details></Details>

    </main>
  );
}