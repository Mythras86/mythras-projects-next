import Identitas from "./components/Identitas";
import Orokseg from "./components/Orokseg";
import Psziche from "./components/Psziche";

export default function Jellemzok() {

  return (
    <main id='jellemzok'>
      <h1 className="margBott1">Jellemzők</h1>
      <Orokseg></Orokseg>
      <Identitas></Identitas>
      <Psziche></Psziche>
    </main>
  );
}