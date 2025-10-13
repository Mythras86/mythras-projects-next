import { Metadata } from "next";
import Ujkarakter from "./components/Ujkarakter";

export const metadata: Metadata = {
  title: 'Új Karakter',
  description: 'Új karakter készítése oldal'
};

export default function UjkarakterPage() {
  return (
    <main>
      <Ujkarakter></Ujkarakter>
    </main>
  );
}