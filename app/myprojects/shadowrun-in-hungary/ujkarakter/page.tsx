import { Metadata } from "next";
import Ujkarakter from "./components/Ujkarakter";

export const metadata: Metadata = {
  title: 'Új Karakter',
  description: 'Új karakter készítése oldal'
};

export default function UjkarakterComp() {
  return (
    <main>
      <h1>Új Karakter készítése</h1>
      <Ujkarakter></Ujkarakter>
    </main>
  );
}