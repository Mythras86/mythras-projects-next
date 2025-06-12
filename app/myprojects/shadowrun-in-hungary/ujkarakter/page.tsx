import { Metadata } from "next";
import Orokseg from "./components/Orokseg";

export const metadata: Metadata = {
  title: 'Új Karakter',
  description: 'Új karakter készítése oldal'
};

export default function Ujkarakter() {
  return (
    <main id='ujkarakter'>
      <h1>Új Karakter készítése</h1>
      <Orokseg />
    </main>
  );
}