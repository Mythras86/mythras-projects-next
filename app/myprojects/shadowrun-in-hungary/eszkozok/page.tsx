import { Metadata } from "next";
import "./page.scss";
import Eszkozok from "./components/Eszkozok";

export const metadata: Metadata = {
  title: 'Eszközök',
  description: 'Buy buy buy'
};

export default function EszkozokPage() {
    return (
      <main id='eszkozok'>
        <Eszkozok></Eszkozok>
      </main>
    );
}