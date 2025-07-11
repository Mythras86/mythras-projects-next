import "./page.scss";
import { Metadata } from "next";
import Karakterek from "./components/Karakterek";

export const metadata: Metadata = {
  title: 'Karakterek',
  description: 'Karakterek'
};

export default function KarakterekComp() {
  return (
    <main id='karakterek'>
      <h1>Karakterek</h1>
      <Karakterek></Karakterek>
    </main>
  );
}