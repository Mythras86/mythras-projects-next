import "./page.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'egykari',
  description: 'egykari'
};

export default function KarakterComp() {
  return (
    <main id='karakterek'>
      <h1>Karakterek</h1>
    </main>
  );
}